import BaseResponse from "@/types/response";
import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface ProductResponse extends BaseResponse {
    data: Product[]
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/product",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductResponse, any>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
