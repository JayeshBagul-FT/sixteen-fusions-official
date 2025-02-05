import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/user`;

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

const { useLoginUserMutation } = userApi;
export default userApi;
