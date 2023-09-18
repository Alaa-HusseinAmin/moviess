import axios from "axios"
export let getTrending= async(mediaType)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=52bbcddeda849047525b51d6f8a12361`)    
    return data.results  
}

export let getDetails= async(id,mediaType)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`)   

    return data
}

export let axiosPost= async(formData,endPoint)=>{
    let {data} = await axios.post(`http://localhost:4000/user/${endPoint}`,formData)   

    return data
}

 
  