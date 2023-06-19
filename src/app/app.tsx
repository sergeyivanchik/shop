import { FC } from 'react';

import { MainLayout } from '@/layouts';

import { GlobalStyles } from './app.styles';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>App</MainLayout>
    </>
  );
};

export { App };
