import { rtkQueryApi } from './api';

import { IProduct } from '@/types';

const productsApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => 'products',
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

const { useGetProductsQuery, useGetProductQuery } = productsApi;

export { useGetProductsQuery, useGetProductQuery };
