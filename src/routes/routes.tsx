import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '@/layouts';

import { MainPage, ProductPage } from '@/pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="categories/:categoryId" element={<MainPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Switch>
  );
};

export { Routes };
