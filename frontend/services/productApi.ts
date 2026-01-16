import { apiSlice } from './apiSlice';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        getProduct: builder.query<any, string>({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
