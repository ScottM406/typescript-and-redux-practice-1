import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ChuckNorrisState {
  value: string;
}

const initialState: ChuckNorrisState = {
  value: "",
}

const checkNorrisSlice = createSlice({
  name: "chuckNorris",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getMusicalChuckJoke.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.value += action.payload + "\n";
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

export default checkNorrisSlice.reducer;