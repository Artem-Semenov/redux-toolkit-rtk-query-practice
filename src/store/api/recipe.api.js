import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (reciper) => ({
        body: reciper,
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeApi;
