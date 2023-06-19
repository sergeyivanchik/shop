import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterProvider } from 'react-router-dom';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider>
    <App />
  </RouterProvider>
);
