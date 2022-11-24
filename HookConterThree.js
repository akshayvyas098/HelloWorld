import React,{useState} from 'react'

 function HookConterThree() {
    
    const[name,setName]=useState({firstName:'',lastName:''})
     setName=e=>{
        e.target.value;
     }
  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={e.setName({...name,firstname:e.target.value})}/>
        <input type="text" value={name.lastName } onChange={e.setName({...name,lastname:e.target.value})}/>
        <h2>Your first name is {name.firstName}</h2>
        <h2>Your first name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
       </form>
    </div>
  )
}
export default HookConterThree