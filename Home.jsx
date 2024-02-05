// import React from 'react'
// import { useState } from 'react';
// const Home=()=>{
//   const[inputValue,setintputValue]=useState=0;
//   const increment=()=>{
//     setintputValue(123);
//   };
// const decrement=()=>{
//   inputValue--;
// }
  
// };
//  return (
//     <div>
//       <input style={{ padding : 20, 
//       border : "1px solid rgba(0,0,0,0.4)" }}
//        type="number"
//        placeholder="Enter something"
//       // onChange={onChangerHandler}
//       value={inputValue}
//       readOnly
//        />
//        <button>-</button>
//        {/* <button>*</button>
//        <button>+</button>
//        <button>()</button> */}
//     </div>
//   )
      
// export default Home;

import React, { useEffect, useState } from 'react'
import Task from './Task';
const Home = () => {
  const initialArray=localStorage.getItem("tasks")
  ?JSON.parse(localStorage.getItem("tasks")):[];

const[tasks, setTasks]=useState(initialArray);

const[title,settitle]=useState("");

const[Description,setDescription]=useState("");

// console.log(tasks)
const submitHandler=(e)=>{
  e.preventDefault(); 
  setTasks([...tasks,{title,Description}]); 
  settitle("")
  setDescription("")
  // spread operator this is used for spread the elements
};
const deleteTask=(index)=>{
  const filteredArr=tasks.filter((val,i)=>{
    return i !==index;
    });
    setTasks(filteredArr);
};
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);
return(
  <div className='container'>
  <h1>DAILY GOALS</h1>
  <form onSubmit={submitHandler}>
    <input type="text"placeholder='Title'
    value={title} onChange={(e)=>settitle(e.target.value)}/>
    <textarea placeholder='Description'
    value={Description} onChange={(e)=>setDescription(e.target.value)}></textarea>
  <button type='submmit'>ADD</button>
  </form> 
 {tasks.map((item,index)=>(
  <Task key={index} title={item.title} Description={item.Description} deleteTask={deleteTask}
    index={index}
  />
 ))}
  </div>
  );
};

export default Home;
