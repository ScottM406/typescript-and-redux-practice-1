import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <h1>Counter:</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Inrease</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(incrementByAmount(1000))}>Increase by 1000</button>
        <button onClick={() => dispatch(incrementAsync(1000))}>Increase by 1000 asynchronously</button>
      </div>
    </>
    
  )
}

export default Counter;