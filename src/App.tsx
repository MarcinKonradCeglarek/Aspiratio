import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { StoreContextProvider } from './context/contextStore'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContextProvider>
        <Router />
      </StoreContextProvider>
    </QueryClientProvider>
  )
}

export default App
