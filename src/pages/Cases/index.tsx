import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IconSearch, IconInfoCircle, IconTrash } from '@tabler/icons-react'
import { Title, Button, Table, Input, Select, ActionIcon } from '@mantine/core'
import debounce from 'lodash.debounce'

import { queryClient } from '../../../queryClient'
import { deleteCase, getCases } from '../../apiService/casesService'
import { CustomPagination } from '../../components/ui/CustomPagination'
import CreateModal from './ModalForm'
import TableSkeleton from '../../components/ui/TableSkeleton'
import CustomDeleteModal from '../../components/ui/CustomDeleteModal'

const Cases = () => {
  const navigate = useNavigate()

  const [activePage, setActivePage] = useState(1)

  const [perPage, setPerPage] = useState<string | null>('10')

  const [search, setSearch] = useState<string>('')

  const [opened, { open, close }] = useDisclosure(false)

  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false)

  const [currCase, setCurrCase] = useState<any>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['adm/cases', search, activePage, perPage],
    queryFn: () =>
      getCases({
        search: search,
        page: activePage,
        limit: perPage,
      }),
  })

  const totalPage = Math.ceil((data?.data?.total || 0) / Number(perPage))

  const debouncedSearch = useMemo(() => {
    return debounce((e: any) => {
      setSearch(e.target.value)
      setActivePage(1)
    }, 1000)
  }, [])

  const deleteCaseMutation = useMutation({
    mutationFn: () => {
      return deleteCase(currCase.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adm/cases'] as const,
      })
      showNotification({
        title: 'Deleted',
        message: 'Case has been deleted successfully',
        color: 'green',
      })
      closeDeleteModal()
      setCurrCase(null)
    },
    onError: (err: any) => {
      console.log('err: ', err)
      showNotification({
        title: 'Error',
        message: err?.response?.data?.message,
        color: 'red',
      })
    },
  })

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="flex flex-col space-y-6">
      <Title order={3} c="#FFFFFF">
        Cases
      </Title>

      <div className="flex justify-between">
        <Input
          placeholder="Search Cases"
          rightSection={<IconSearch />}
          miw={300}
          rightSectionWidth={40}
          onChange={debouncedSearch}
        />

        <Button
          onClick={() => {
            open()
            setCurrCase(null)
          }}
        >
          Add
        </Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg text-[#FFFFFF]">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Case Id</Table.Th>
              <Table.Th>Case name</Table.Th>
              <Table.Th className="text-end">Token List</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          {isLoading ? (
            <TableSkeleton rowsNum={Number(perPage)} columnsNum={4} />
          ) : (
            <Table.Tbody>
              {data?.data?.data?.map((d: any) => (
                <Table.Tr key={d.name}>
                  <Table.Td>{d.id}</Table.Td>
                  <Table.Td>{d.case_name}</Table.Td>
                  <Table.Td className="text-end">
                    <Button
                      variant="light"
                      onClick={() => {
                        navigate(`${d.id}`)
                      }}
                    >
                      Token List
                    </Button>
                  </Table.Td>
                  <Table.Td className="text-end">
                    <ActionIcon
                      onClick={() => {
                        open()
                        setCurrCase(d)
                      }}
                      variant="transparent"
                    >
                      <IconInfoCircle />
                    </ActionIcon>

                    <ActionIcon
                      onClick={() => {
                        openDeleteModal()
                        setCurrCase(d)
                      }}
                      variant="transparent"
                      className="text-red-500 hover:text-red-600"
                    >
                      <IconTrash />
                    </ActionIcon>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          )}
        </Table>
      </div>

      {data && (
        <div className="flex">
          <Select
            value={perPage}
            onChange={(value: any) => {
              setPerPage(value)
              setActivePage(1)
            }}
            data={[
              { value: '5', label: 'Показывать по: 5' },
              { value: '10', label: 'Показывать по: 10' },
              { value: '15', label: 'Показывать по: 15' },
              { value: '20', label: 'Показывать по: 20' },
              { value: '25', label: 'Показывать по: 25' },
            ]}
            allowDeselect={false}
            w={200}
          />

          <CustomPagination
            value={activePage}
            onChange={setActivePage}
            total={totalPage}
          />
        </div>
      )}

      <CreateModal opened={opened} close={close} currCase={currCase} />

      {openedDeleteModal && (
        <CustomDeleteModal
          opened={openedDeleteModal}
          close={closeDeleteModal}
          title="Delete Case"
          deleteFunction={() => deleteCaseMutation.mutate()}
        />
      )}
    </div>
  )
}

export default Cases
