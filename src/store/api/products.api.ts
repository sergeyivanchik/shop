import { rtkQueryApi } from './api';

import { IProduct } from '@/types';

const productsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => 'products',
    }),
  }),
});

const { useGetProductsQuery } = productsApi;

export { useGetProductsQuery };
