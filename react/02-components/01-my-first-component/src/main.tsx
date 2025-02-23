import { createRoot } from 'react-dom/client'

// import App from './App.tsx'
import MyFirstComponent from './MyFirstComponent.tsx'

createRoot(document.getElementById('root')!).render(
    // <App />
    MyFirstComponent()
)
