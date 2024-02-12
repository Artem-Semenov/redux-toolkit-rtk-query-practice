import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<IRecipe>) => {
      const recipe = action.payload;
      if (state.some((el) => el.id === recipe.id)) {
        return state.filter((el) => el.id !== recipe.id);
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
