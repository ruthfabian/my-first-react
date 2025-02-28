import './slides.css';
import { useState } from 'react'


function Slides() {
  const[count,setCount] = useState(0);
  function increment(){setCount(count+1); }

  function decrement(){setCount(count-1);}

  function reset(){setCount(0);}

  return(

    <div>
      <h1>My First React Counter App</h1>
      <h2>{count}</h2>
      <div id='buttons'>
       <button onClick={decrement}>-</button>
       <button onClick={increment}>+</button>
       <button onClick={reset}>Reset</button>
      </div>

    </div>

  );
}

export default Slides