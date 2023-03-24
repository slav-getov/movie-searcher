import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseReqUrlNoParams } from "../static-data/urls";
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseReqUrlNoParams }),
  endpoints: (builder) => ({
    getMovieByTitle: builder.query({
      query: ({ title, apikey }) => `/?t=${title}&apikey=${apikey}`,
    }),
  }),
});

export const { useGetMovieByTitleQuery } = movieApi;
