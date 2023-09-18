import React, { useEffect, useState } from 'react';
import Item from "../Item/Item.jsx";
import Loading from '../Loading/Loading.jsx';
import { getTrending } from "./../../Api/Api.js";
export default function Movie() {
  const [Movie,setMovies] = useState([])
   async function getData(){

  let movies = await getTrending('movie')
  setMovies(movies) 
} 
useEffect(()=>{
  getData()
},[])
  return (
    <>
    {Movie.length>0? <> <div className="container">
  <div className="row">

   {Movie.map((value,index)=><Item key={index} data={value}/>)}
  </div>
  </div> </>:<Loading/>}
    </>
  )
}
