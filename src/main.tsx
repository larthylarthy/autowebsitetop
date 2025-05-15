
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/grapes-custom.css' // Import our custom GrapesJS styles

// Set dark mode class on document before React loads
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
