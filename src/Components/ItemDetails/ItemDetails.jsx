import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../Api/Api.js';
import Loading from './../Loading/Loading';

export default function ItemDetails() {
  let x=useParams()
  console.log(x.id);
  const [Details,setDetails] = useState('')
   async function getData(){

  let Details = await getDetails(x.id,x.media)
  setDetails(Details) 
} 
console.log(Details);
useEffect(()=>{
  getData()
},[])
  return ( 
    <>
      {Details ? <div className='container'>
        <div className='row'>
          <div className='col-md-4 '>
             <img className='w-100' src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt=''/>
          </div>
          <div className='col-md-7'>
           <div>
            <h2>{Details.title} {Details.name}</h2>
            {Details.genres.map((value,index)=><span key={index} className='badge bg-info p-2 mx-2'>{value.name}</span>)}
            <ul>
              <li>
                {Details.vote_average}
              </li>
              <li>
                {Details.vote_count}
              </li>
              <li>
                {Details.release_date}
              </li>
            </ul>
            <p>{Details.overview}</p>
           </div>
          </div>
        </div>
      </div>:<Loading/>}
    </>
  )
}
