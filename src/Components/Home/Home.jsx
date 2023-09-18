import React, { useEffect, useState } from 'react';
import { Offline } from "react-detect-offline";
import Disconnected from '../Disconnected/Disconnected.jsx';
import Item from "../Item/Item.jsx";
import Loading from '../Loading/Loading.jsx';
import { getTrending } from "./../../Api/Api.js";
export default function Home() {
  const [Movies,setMovies] = useState([])
  const [Tv,setTv] = useState([])

  async function getData(){
    let movies = await getTrending('movie')
    setMovies(movies)  

    let tv = await getTrending('tv')
    setTv(tv) 
  }
//   let getTrending= async()=>{
//   let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`)
//   setMovies(data.results)   
// }  
useEffect(()=>{
  getData()
},[])
  return ( 
  <>
  <Offline><Disconnected/></Offline>
{Movies.length>0? <>  <div className="container">
  <div className="row">
  <div className="col-md-4">
    <div>
    <div className="brdr w-25"></div>
      <h2>Trending <br/> Movies <br/> To Watch Now</h2>
      <p>Most Watched Movies by days</p>
    <div className="brdr w-100"></div>
    </div>
  </div>
   {Movies.map((value,index)=><Item key={index} data={value}/>)}
  </div>
  </div>

  <div className="container">
    <div className="row">
    <div className="col-md-4">
    <div>
    <div className='brdr w-25'></div>
    <h2>Tv <br/> To Watch Now</h2>
      <p>Most Watched Movies by days</p>
    <div className="brdr w-100"></div>
    </div>
    </div>
    {Tv.map((value,index)=><Item key={index} data={value}/>)}
    </div>
    </div> </>:<Loading/>}
  </>
  )
}
