import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getMusicalChuckJoke, getScientificChuckJoke } from "../state/chuckNorrisSlice";

const ChuckNorris = () => {

  const chuckNorrisMusicalJokes = useSelector((state: RootState) => state.chuckNorris.musicalJokes)
  const chuckNorrisScientificJokes = useSelector((state: RootState) => state.chuckNorris.scientificJokes)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <h1>Check Norris Jokes:</h1>
    <div>
      {chuckNorrisMusicalJokes.map((joke, index) => (
        <h2 key={index}>{joke}</h2>
      ))}
      {chuckNorrisScientificJokes.map((joke, index) => (
        <h2 key={index}>{joke}</h2>
      ))}
    </div>
    <div>
      <button onClick={() => dispatch(getMusicalChuckJoke())}>Musical Chuck joke</button>
      <button onClick={() => dispatch(getScientificChuckJoke())}>Scientific Chuck Joke</button>
    </div>
    </>
  )
};

export default ChuckNorris;