import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openapi.programming-hero.com/api/quiz' }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: () => `/`,
    }),
    getSingleQuiz: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
})


export const { useGetQuizQuery, useGetSingleQuizQuery } = apiSlice