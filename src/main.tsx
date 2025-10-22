import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './lib'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
