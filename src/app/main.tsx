import { createRoot } from 'react-dom/client';
import Router from './router';
import './styles/styles.css';
import './styles/fonts.css';

createRoot(document.getElementById('root')!).render(<Router />);
