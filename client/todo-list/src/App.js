import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Item from './component/Item';

function App() {
  const [list,setList]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/getdata')
    .then((res)=>setList(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className="App">
     <h1 className=' font-bold'>TodoList</h1>
     <Button/>
     {
      list.map((item)=>{
        console.log(item)
        return <Item {...item}/>
      })
     }
    </div>
  );
}

export default App;
