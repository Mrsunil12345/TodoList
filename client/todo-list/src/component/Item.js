import axios from 'axios'
import React from 'react'

export const Item = ({_id,name,done}) => {
  function handleEdit(id){
    axios.put('http://localhost:8080/updateData/'+id)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }

  function handleDelete(id){
    axios.delete('http://localhost:8080/deleteData/'+id)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})

  }
  return (
    <div className='flex gap-10 mx-[30rem] border border-black justify-between w-96 mt-1 bg-slate-400 p-1'>
      <h2 className=' font-bold'>{name}</h2>
      <button onClick={()=>{handleEdit(_id)}}>{done?<h4 className=' bg-green-900 rounded-md p-1' >done</h4>:<h4 className=' bg-yellow-500 rounded-md p-1'>Mark</h4>}</button>
      <button className=' bg-red-600 border border-red-600 rounded-md p-1 m-1' onClick={()=>{handleDelete(_id)}}>delete</button>
    </div>
  )
}

export default Item
