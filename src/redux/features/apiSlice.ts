import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quiz-app-server-kqpnpq2q4-hasanulhasan.vercel.app/v1' }),
  tagTypes: ['Topic', 'Question', 'User', 'Score'],
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
    getScores: builder.query({
      query: () => '/score',
      providesTags: ['Score']
    }),
    getQuestions: builder.query({
      query: () => '/question',
      providesTags: ['Question']
    }),
    createUserToDB: builder.mutation({
      query: (data) => ({
        url: '/user/create-user',
        method: 'POST',
        body: data
      }),
    }),
    createScore: builder.mutation({
      query: (data) => ({
        url: '/score/create-score',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Score']
    }),
    createQuestionToDB: builder.mutation({
      query: (data) => ({
        url: '/question/create-question',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Question']
    }),
    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `/question/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Question']
    }),
    deleteScore: builder.mutation({
      query: (id) => ({
        url: `/score/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Score']
    }),
  }),
})


export const {useGetScoresQuery, useGetQuestionsQuery, useGetQuizQuery, useGetSingleQuizQuery, useCreateUserToDBMutation, useCreateQuestionToDBMutation, useCreateScoreMutation, useDeleteQuestionMutation, useGetUsersQuery, useDeleteScoreMutation} = apiSlice