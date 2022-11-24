
import React,{useEffect, useState} from 'react';

const Greet=()=>{
    const[count ,setCount]=useState(0);
    useEffect(()=>{
    document.title=`you click ${count} times`
    })
   
 return <div>
    <h1>Hello Viswas </h1>
    <button onClick={()=>setCount(count+1)}>you click${count} Times</button>
    </div>
    

}

export default Greet;