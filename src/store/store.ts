import { configureStore } from '@reduxjs/toolkit';

import { rtkQueryApi } from './api';

const store = configureStore({
  reducer: {
    [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
  devTools: true,
});

type TStore = ReturnType<typeof store.getState>;

export { store, TStore };
