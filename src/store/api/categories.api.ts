import { rtkQueryApi } from './api';

import { ICategory } from '@/types';

const categoriesApi = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], null>({
      query: () => 'categories',
    }),
  }),
});

const { useGetCategoriesQuery } = categoriesApi;

export { useGetCategoriesQuery };
