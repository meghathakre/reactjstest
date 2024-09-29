import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const CounterApp =()=>{
  const count= useSelector((state)=>state.mycounter.cnt);
  const dispatch= useDispatch();

  return(
    <>
     <h1>Welcome</h1>
     <button onClick={()=>{dispatch(increment())}}>Increment</button>
     <h1>{count}</h1>
     <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}
export default CounterApp;