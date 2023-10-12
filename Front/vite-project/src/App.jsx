import { useCounter } from './hooks/useCounter';
import './App.css'

function FirstApp() {
  const{counter,increment,decrease,reset} = useCounter(0);

  return (
    <>
     <h1>{counter}</h1>
     <div>
      <button onClick={()=>increment()}>Add</button>
      <button onClick={()=>reset()}>Reset</button>
      <button onClick={()=>decrease()}>Decrease</button>
     </div>
    </>
  )
}




export default FirstApp
