import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import fetchItemWithDebounce from './debounce';
let url ='https://api.frontendeval.com/fake/food/'
const Main = () => {
  const  [query, setQuery] = useState('');
 const [loading , setLoading] = useState(false);
const [items, setItems] = useState([]);

 async function fetchData(){
    setLoading(true)
    try {
       let data= await fetchItemWithDebounce(`${url}/${query}`);
       setItems(data)
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(true)
    }
 }

 useEffect(()=>{
    fetchData()
 },[query])

  return (
    <div>
      <input type='text'  value={query}  onChange={(e)=>setQuery(e.target.value)}/> 
      {
        items?.map((el,i)=>{
          return(
            <div key={el}>
           <span> {el} </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Main

