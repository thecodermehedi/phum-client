import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxStore } from './redux/store.ts'
import router from './routes/routes.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
 <StrictMode>
  <Provider store={reduxStore}>
   <RouterProvider router={router} />
  </Provider>
 </StrictMode>
)
