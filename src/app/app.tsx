import { FC } from 'react';

import { GlobalStyles } from './app.styles';
import { MainLayout } from '@/layouts';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>App</MainLayout>
    </>
  );
};

export { App };
