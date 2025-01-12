import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Dashbord from './componant/dashbord.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashbord />
  </StrictMode>,
)
