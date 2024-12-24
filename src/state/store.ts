import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import phraseGeneratorReducer from './phraseGeneratorSlice';
import chuckNorrisReducer from './chuckNorrisSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    phraseGenerator: phraseGeneratorReducer,
    chuckNorris: chuckNorrisReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;