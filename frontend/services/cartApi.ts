import { apiSlice } from './apiSlice';

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<any[], void>({
            query: () => '/cart',
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation<any[], { productId: string; quantity?: number }>({
            query: (body) => ({
                url: '/cart',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Cart'],
        }),
        updateQuantity: builder.mutation<any[], { productId: string; quantity: number }>({
            query: (body) => ({
                url: '/cart',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Cart'],
        }),
        removeFromCart: builder.mutation<any[], { productId: string }>({
            query: (body) => ({
                url: '/cart',
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Cart'],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateQuantityMutation,
    useRemoveFromCartMutation,
} = cartApi;
