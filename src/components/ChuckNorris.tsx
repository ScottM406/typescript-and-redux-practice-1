import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getMusicalChuckJoke } from "../state/chuckNorrisSlice";

const ChuckNorris = () => {

  const chuckNorrisJoke = useSelector((state: RootState) => state.chuckNorris.value)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <h1>Check Norris Jokes:</h1>
    <h2>{chuckNorrisJoke}</h2>
    <div>
      <button onClick={() => dispatch(getMusicalChuckJoke())}>Musical Chuck joke</button>
    </div>
    </>
  )
};

export default ChuckNorris;