"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PostResponse } from "../../types/types"; // Import types from a separate file for better organization

// Create a base query function to handle base URL and headers
const createBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: process.env.ETD_BASE_URL || "http://127.0.0.1:8000/api", // Provide a default value or handle undefined cases
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
};

// Define the API slice
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: createBaseQuery(),
  endpoints: (builder) => ({
    postLoginApi: builder.mutation<PostResponse, Partial<Post>>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"], // Use this for cache invalidation if applicable
    }),
  }),
  tagTypes: ["Login"], // Specify tag types for cache invalidation
});

// Export hooks for usage in functional components
export const { usePostLoginApiMutation } = loginApi;
