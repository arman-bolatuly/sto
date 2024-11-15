import {
  Stack,
  Table,
  Title,
  Text,
  Input,
  Button,
  Badge,
  ActionIcon,
  Select,
} from '@mantine/core'
import { useMemo, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IconInfoCircle, IconSearch, IconTrash } from '@tabler/icons-react'
import debounce from 'lodash.debounce'

import { queryClient } from '../../../queryClient'
import { getCases } from '../../apiService/casesService'
import { deleteToken, getTokens } from '../../apiService/tokensService'
import { CustomPagination } from '../../components/ui/CustomPagination'
import CreateModal from './ModalForm'
import TableSkeleton from '../../components/ui/TableSkeleton'
import CustomDeleteModal from '../../components/ui/CustomDeleteModal'

const TokenList = () => {
  const [activePage, setActivePage] = useState(1)

  const [perPage, setPerPage] = useState<string | null>('10')

  const [search, setSearch] = useState<string>('')

  const [caseId, setCaseId] = useState<string | null>(null)

  const [opened, { open, close }] = useDisclosure(false)

  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false)

  const [currToken, setCurrToken] = useState<any>(null)

  const cases = useQuery({
    queryKey: ['adm/cases', search, activePage, perPage],
    queryFn: () =>
      getCases({
        page: 1,
        limit: 1000,
      }),
  })?.data?.data?.data?.map((c: any) => ({
    value: String(c?.id),
    label: c?.case_name,
  }))

  const { data, isLoading, isError } = useQuery({
    queryKey: ['adm/tokens', search, activePage, perPage, caseId],
    queryFn: () =>
      getTokens({
        search,
        page: activePage,
        limit: perPage,
        case_id: caseId,
      }),
  })

  const totalPage = Math.ceil((data?.data?.total || 0) / Number(perPage))

  const debouncedSearch = useMemo(() => {
    return debounce((e: any) => {
      setSearch(e.target.value)
      setActivePage(1)
    }, 1000)
  }, [])

  const deleteTokenMutation = useMutation({
    mutationFn: () => {
      return deleteToken(currToken?.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adm/tokens'] as const,
      })
      showNotification({
        title: 'Deleted',
        message: 'Case has been deleted successfully',
        color: 'green',
      })
      closeDeleteModal()
      setCurrToken(null)
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
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      <Title order={3} c="#FFFFFF">
        STO List
      </Title>

      <div className="flex items-center">
        <Input
          placeholder="Search token"
          rightSection={<IconSearch />}
          miw={300}
          rightSectionWidth={40}
          onChange={debouncedSearch}
          mr={20}
        />

        <Select
          placeholder="Pick case id"
          data={cases}
          onChange={setCaseId}
          value={caseId}
          clearable
          searchable
          disabled={cases?.length === 0 || !cases}
        />

        <Button
          onClick={() => {
            open()
            setCurrToken(null)
          }}
          ml="auto"
        >
          Create Token
        </Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Token Symbol</Table.Th>
              <Table.Th>Token Name</Table.Th>
              <Table.Th>Token Type</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Issuer Number</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          {isLoading ? (
            <TableSkeleton rowsNum={Number(perPage)} columnsNum={7} />
          ) : (
            <Table.Tbody>
              {data?.data?.data?.map((d: any) => (
                <Table.Tr key={d.id}>
                  <Table.Td>
                    <Text className="bodyDemibold">{d.symbol}</Text>
                    {/* <Image w={100} h={100} src={d?.tokenImage} radius="md" /> */}
                  </Table.Td>
                  <Table.Td>
                    <div className="flex flex-col space-y-1">
                      <Text className="bodyDemibold">{d.name}</Text>
                      {/* <Text className="initial2">{d.tokenShortName}</Text> */}
                      <Badge color="green" c="white" radius={4}>
                        Released
                      </Badge>
                    </div>
                  </Table.Td>
                  <Table.Td>{d.type}</Table.Td>
                  <Table.Td>{d.description}</Table.Td>
                  {/* <Table.Td>
                  {d?.term?.start} - {d.term.end}
                  </Table.Td> */}
                  <Table.Td>{d.issuer_number}</Table.Td>
                  <Table.Td>
                    <div className="flex flex-col space-y-1">
                      <Text className="bodyDemibold">{d.price} USD</Text>
                      {/* <Text className="bodyDemibold">
                      {d.stoReach.current} / {d.stoReach.target} USD
                    </Text> */}
                      {/* <Progress
                      value={d.stoReach.completedPercent}
                      size="lg"
                      transitionDuration={200}
                    /> */}

                      {/* <Text className="caption1">
                      {d.stoReach.completedPercent}% Completed
                    </Text> */}
                    </div>
                  </Table.Td>

                  <Table.Td>
                    <ActionIcon
                      variant="transparent"
                      onClick={() => {
                        open()
                        setCurrToken(d)
                      }}
                    >
                      <IconInfoCircle />
                    </ActionIcon>
                    <ActionIcon
                      onClick={() => {
                        openDeleteModal()
                        setCurrToken(d)
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

      <CreateModal
        opened={opened}
        close={close}
        currToken={currToken}
        caseId={caseId}
      />

      {openedDeleteModal && (
        <CustomDeleteModal
          opened={openedDeleteModal}
          close={closeDeleteModal}
          title="Delete Token"
          deleteFunction={() => deleteTokenMutation.mutate()}
        />
      )}
    </Stack>
  )
}

export default TokenList
