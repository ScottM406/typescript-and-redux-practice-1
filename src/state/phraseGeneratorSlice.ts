import { faker } from "@faker-js/faker";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface PhraseGeneratorState {
  value: string;
}

const initialState: PhraseGeneratorState = {
  value: "",
}

const phraseGeneratorSlice = createSlice({
  name: "phraseGenerator",
  initialState,
  reducers: {
    generateNoun: (state) => {
      const word = faker.word.noun();
      state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    },
    generateVerb: (state) => {
      const word = faker.word.verb();
      state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    },
    generatePastTenseVerb: (state) => {
     const word = faker.word.verb() + "ing";
     state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    },
    generateConjunction: (state) => {
      const word = faker.word.conjunction();
      state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    },
    generateAdjective: (state) => {
      const word = faker.word.adjective();
      state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    },
    generateAdverb: (state) => {
      const word = faker.word.adverb();
      state.value += state.value ? word + " " : word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
  },
});

export const { generateNoun, generateVerb, generatePastTenseVerb, generateConjunction, generateAdjective, generateAdverb } = phraseGeneratorSlice.actions;

export default phraseGeneratorSlice.reducer;