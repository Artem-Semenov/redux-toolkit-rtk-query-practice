import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (reciper) => ({
        body: reciper,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeApi;
