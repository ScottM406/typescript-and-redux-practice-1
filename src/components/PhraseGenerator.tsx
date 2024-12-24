import { generateNoun, generateVerb, generatePastTenseVerb, generateConjunction, generateAdjective, generateAdverb } from "../state/phraseGeneratorSlice";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const PhraseGenerator = () => {

  const phrase = useSelector((state: RootState) => state.phraseGenerator.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <h1>Phrase Generator:</h1>
    <h2>{phrase}</h2>
    <div>
      <button onClick={() => dispatch(generateNoun())}>Add noun</button>
      <button onClick={() => dispatch(generateVerb())}>Add verb</button>
      <button onClick={() => dispatch(generatePastTenseVerb())}>Add past-tense verb</button>
      <button onClick={() => dispatch(generateConjunction())}>Add conjunction</button>
      <button onClick= {() => dispatch(generateAdjective())}>Add adjective</button>
      <button onClick={() => dispatch(generateAdverb())}>Add adverb</button>
    </div>
    </>
  )
}

export default PhraseGenerator;