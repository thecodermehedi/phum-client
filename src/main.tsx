import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(<StrictMode> <RouterProvider router={router} /> </StrictMode>)
