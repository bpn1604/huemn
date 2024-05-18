import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    return data.meals;
  }
);

export const removeFavorite = createAsyncThunk(
  'recipes/removeFavorite',
  async (recipeId) => {
    // Perform async operation to remove the recipe from favorites (e.g., API call)
    // For simplicity, we'll just return the recipeId in this example
    return recipeId;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
    selectedRecipe: null,
    favorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    selectRecipe(state, action) {
      state.selectedRecipe = action.payload;
    },
    addToFavorites(state, action) {
      const exists = state.favorites.some(favorite => favorite.idMeal === action.payload.idMeal);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    // New reducer to remove a recipe from favorites
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(recipe => recipe.idMeal !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectRecipe, addToFavorites, removeFromFavorites } = recipesSlice.actions;

export default recipesSlice.reducer;
