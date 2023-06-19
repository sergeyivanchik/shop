import { FC } from 'react';

import { Routes } from '@/routes';

import { GlobalStyles } from './app.styles';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export { App };
