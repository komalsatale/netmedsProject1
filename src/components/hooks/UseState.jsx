import React, { useState } from 'react'
import Subject from './Subject'

export default function UseState() {
    const [data,setData]=useState('codeNG')
    const handleUpdate=()=>{
        setData('ANG code')
    }
  return (
    <div>
      <h3>state  and props management in functional component</h3>
      <h1>welcome to {data}</h1>
      <Subject sub={'javascript'}/>
      <Subject sub={'React js'}/>
      <button onClick={handleUpdate}>update data</button>

    </div>
  )
}
