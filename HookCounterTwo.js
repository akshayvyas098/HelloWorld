import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const[count,setCount]=useState(0);

  return (
    <div class="HookCounter">
        Count:{count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Incriment</button>
        <button onClick={()=>setCount(count-1)}>Decriment</button>
        <button onClick={()=>setCount(count+5)}>Incriment 5</button>
        <button onClick={()=>setCount(count-5)}>Incriment 5</button>
    </div>
  )
}

export default HookCounterTwo
