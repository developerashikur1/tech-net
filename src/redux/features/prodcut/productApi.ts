import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/products',
        }),
        singleProduct: build.query({
            query: (id) => ({url: `/product/${id}`}),
        }),
        getComment: build.query({
            query: (id) => ({url: `/comment/${id}`}),
            providesTags: ['comments'],
        }),
        postComment: build.mutation({
            query: ({id, data}) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
      }),
});



export const { useGetProductsQuery, useSingleProductQuery, usePostCommentMutation, useGetCommentQuery } = productApi;