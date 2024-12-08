import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, reduxStore } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import router from './routes/routes.tsx'
import { Toaster } from 'sonner'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
 <StrictMode>
  <Provider store={reduxStore}>
   <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
   </PersistGate>
   <Toaster richColors />
  </Provider>
 </StrictMode>
)
