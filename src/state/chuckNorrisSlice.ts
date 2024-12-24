import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ChuckNorrisState {
  musicalJokes: string[];
  scientificJokes: string[];
}

const initialState: ChuckNorrisState = {
  musicalJokes: [],
  scientificJokes: [],
}

const checkNorrisSlice = createSlice({
  name: "chuckNorris",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getMusicalChuckJoke.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.musicalJokes.push(action.payload)
      }
    )
  }
});

export const getMusicalChuckJoke = createAsyncThunk(
  "chuckNorris/getMusicalChuckJoke",
  async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random?category=music");
    const jokeJSON = await response.json();
    const joke = jokeJSON.value
    return joke;
  }
)

export const getScientificChuckJoke = createAsyncThunk(
  "chuckNorris/getMusicalChuckJoke",
  async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random?category=science");
    const jokeJSON = await response.json();
    const joke = jokeJSON.value
    return joke;
  }
)

export default checkNorrisSlice.reducer;