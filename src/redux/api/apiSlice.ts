import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: [''],
  endpoints: (build) => ({
    getProducts: build.query({
        query: () => '/products',
    }),
    singleProduct: build.query({
        query: (id) => ({url: `/product/${id}`}),
    }),
    getComment: build.query({
        query: (id) => ({url: `/comment/${id}`}),
    }),
    postComment: build.mutation({
        query: ({id, data}) => ({
            url: `/comment/${id}`,
            method: 'POST',
            body: data,
        }),
    }),
  }),
});


export const { useGetProductsQuery, useSingleProductQuery, usePostCommentMutation, useGetCommentQuery } = api;