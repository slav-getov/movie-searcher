import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseReqUrlNoParams } from "../static-data/urls";
const apiKey = "6f309716";
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseReqUrlNoParams }),
  endpoints: (builder) => ({
    getMovieByTitle: builder.query({
      query: ({ title }) => `/?t=${title}&apikey=${apiKey}`,
    }),
  }),
});

export const { useGetMovieByTitleQuery } = movieApi;
