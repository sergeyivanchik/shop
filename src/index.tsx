import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/store';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ReduxProvider store={store}>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ReduxProvider>
);
