import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getMusicalChuckJoke } from "../state/chuckNorrisSlice";

const ChuckNorris = () => {

  const chuckNorrisJokes = useSelector((state: RootState) => state.chuckNorris.jokes)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <h1>Check Norris Jokes:</h1>
    <div>
      {chuckNorrisJokes.map((joke, index) => (
        <h2 key={index}>{joke}</h2>
      ))}
    </div>
    <div>
      <button onClick={() => dispatch(getMusicalChuckJoke())}>Musical Chuck joke</button>
    </div>
    </>
  )
};

export default ChuckNorris;