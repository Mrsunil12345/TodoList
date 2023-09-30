import axios from 'axios'
import React, { useState } from 'react'

 const Button = () => {
    const [ipData,setipData]=useState()
    function handleSavedata(){
     axios.post('http://localhost:8080/save',{data:ipData})
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))

    }
  return (
    <div>
        <input className='border border-black bg-slate-300 w-96 p-2' type='text' onChange={(e)=>{setipData(e.target.value)}} ></input>
        <button className=' rounded-r-md border border-black bg-slate-300 p-2' onClick={()=>{ handleSavedata()}}>save</button>
    </div>
  )
}

export default Button