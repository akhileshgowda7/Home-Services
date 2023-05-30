import { SERVICES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: SERVICES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getServiceDetails: builder.query({
      query: (serviceId) => ({
        url: `${SERVICES_URL}/${serviceId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceDetailsQuery } = servicesApiSlice;
