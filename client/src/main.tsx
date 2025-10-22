import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/theme/provider.tsx'
import './index.css'

// Access the client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider defaultTheme='dark'>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)