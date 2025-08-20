import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import History from './history.jsx'
import { GlobalProvider } from "./context/global-context.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <GlobalProvider>
        {/* provider */}
        <History />
        <App />
      </GlobalProvider>
    </div>
  </StrictMode>,
);
