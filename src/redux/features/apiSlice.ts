import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1' }),
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
      query: () => '/score'
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
    }),
    createQuestionToDB: builder.mutation({
      query: (data) => ({
        url: '/question/create-question',
        method: 'POST',
        body: data
      }),
    }),
    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `/question/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Question']
    }),
  }),
})


export const {useGetScoresQuery,useGetQuestionsQuery, useGetQuizQuery, useGetSingleQuizQuery, useCreateUserToDBMutation, useCreateQuestionToDBMutation, useCreateScoreMutation, useDeleteQuestionMutation} = apiSlice