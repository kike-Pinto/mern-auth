/* eslint-disable no-unused-vars */
import { apiSlice } from './apiSlice'
const USERS_URL = '/api/users'

// injectEndpoints method to create our endpoints
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // we use mutation method to create a login endpoint,
    // we pass in a query object that contains url, method and body of the request
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice
