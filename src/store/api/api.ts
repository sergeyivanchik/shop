import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkQueryApi = createApi({
  reducerPath: 'rtkQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: () => ({}),
});

export { rtkQueryApi };
