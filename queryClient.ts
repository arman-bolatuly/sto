import { QueryClient } from '@tanstack/react-query'

import { apiService } from './src/apiService'

type QueryFnResult<T> = Promise<T>

type MyData = {
  status: number
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }): QueryFnResult<MyData> => {
        if (typeof url === 'string') {
          const { data } = await apiService.get(
            `${import.meta.env.VITE_API_BASE_URL}/${url.toLowerCase()}`,
          )

          return data
        }

        throw new Error('Invalid QueryKey')
      },
      refetchOnWindowFocus: true,
      staleTime: 300000, // 5 minutes cache invalidation
      retry: (failureCount: number) => failureCount < 4,
      retryDelay: (attemptIndex: number) =>
        Math.min(1000 * 2 ** attemptIndex, 10000),
    },
  },
})
