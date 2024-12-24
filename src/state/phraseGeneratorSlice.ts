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
      state.value += faker.word.noun() + " ";
    },
    generateVerb: (state) => {
      state.value += faker.word.verb() + " ";
    },
    generatePastTenseVerb: (state) => {
      state.value += faker.word.verb() + "ing" + " ";
    },
    generateConjunction: (state) => {
      state.value += faker.word.conjunction() + " ";
    },
    generateAdjective: (state) => {
      state.value += faker.word.adjective() + " ";
    },
    generateAdverb: (state) => {
      state.value += faker.word.adverb() + " ";
    }
  },
});

export const { generateNoun, generateVerb, generatePastTenseVerb, generateConjunction, generateAdjective, generateAdverb } = phraseGeneratorSlice.actions;

export default phraseGeneratorSlice.reducer;