import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '@/layouts';

import { MainPage } from '@/pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="categories/:id" element={<MainPage />} />
        <Route path="products/:id" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Switch>
  );
};

export { Routes };
