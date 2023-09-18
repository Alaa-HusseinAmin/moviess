import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { axiosPost } from './../../Api/Api';
export default function SignIn() {

  const [loading,setLoading]= useState(true)
  const [errorMsg,setErrorMsg]= useState('')

let navigate = useNavigate()
  let [formData,setFormData]= useState({
    email:"",
    password:"",
  })

   
  function getFormData({target}){
   
    setFormData({
      ...formData,
      [target.name]:target.value
    })
  }

async  function sendData(e){
  setLoading(false)
  e.preventDefault()
let result= await axiosPost(FormData,'SignIn')
console.log(result);
if(result.message== 'success'){
  //login
  localStorage.setItem('token',result.token)
  navigate('/home')
}else{
setLoading(true)
setErrorMsg(result.message)
}
console.log(result);
  }
  console.log(errorMsg);
  return (
    <>
      <h1>SignIn</h1>
      {errorMsg?<div className='alert alert-danger'>
      {errorMsg}
      </div>:''}
      <form className='myForm' onSubmit={sendData}>
        <label htmlFor='email'>Email</label>
        <input onChange={getFormData} type='text' className='form-control my-3' name='first_name' id="first_name"></input>

        <label htmlFor='password'>Password</label>
        <input onChange={getFormData} type='password' className='form-control my-3' name='first_name' id="first_name"></input>

        <button type='submit' className='btn btn-primary float-end'>{loading?'SignIn':<i className='fas fa-spinner fa-spin'></i>}</button>
      </form>
    </>
  )
}
