import React, { useState } from 'react'
import './Input1.css'

const Input1 = () => {
    const [state,setstate] = useState('')
    console.log(state);
    const [add,setadd] = useState('')
    console.log(add);
    const [list,setlist] = useState([])
    console.log(list.length);


    const list1 = () => {
        setlist([...list, `${state}  ${add}`,]); 
        setstate('')
        setadd('') 
        
      }
      
  return (
<div>
    <div className="parent">
        <input type="text" className="input1" value={state} onChange={(e)=>{setstate(e.target.value)}}/>
        </div>
        <div className="parent1">
        <input type="text" className="input2" value={add} onChange={(e)=>{setadd(e.target.value)}} />
        </div>
        <button className='btn' onClick={list1} >click me</button>
        
        {list.length > 0  && (
        <ul>
          {list.map((item, index) => (
            <li key={index} className="list1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
    
       
  )
}

export default Input1