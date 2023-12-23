import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1/' }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: () => `/topic`,
    }),
    getSingleQuiz: builder.query({
      query: (id) => `/topic/${id}`,
    }),
    getUsers: builder.query({
      query: () => '/user'
    }),
    createUserToDB: builder.mutation({
      query: (data) => ({
        url: '/user/create-user',
        method: 'POST',
        body: data
      }),
    }),
    createQuestionToDB: builder.mutation({
      query: (data) => ({
        url: '/question/create-question',
        method: 'POST',
        body: data
      }),
    }),
  }),
})


export const { useGetQuizQuery, useGetSingleQuizQuery, useCreateUserToDBMutation, useCreateQuestionToDBMutation} = apiSlice