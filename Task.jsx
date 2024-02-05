import React from 'react'

const Task = ({Title,Description,deleteTask,index}) => {

  return (
    <div className='task'>
    <div>
        <p>{Title}</p>
        <span>{Description}</span>
    </div>
    <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  )
}

export default Task;
