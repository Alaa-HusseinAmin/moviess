import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { axiosPost } from './../../Api/Api';
export default function SignUp() {

  const [loading,setLoading]= useState(true)
  const [errorMsg,setErrorMsg]= useState('')

let navigate = useNavigate()
  let [formData,setFormData]= useState({
    first_name:"",
    last_name:"",
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
let result= await axiosPost(FormData,'SignUp')
if(result.message== 'success'){
  //login
  navigate('/Signin')
}else{
setLoading(true)
setErrorMsg(result.errors)
}
console.log(result);
  }
  console.log(errorMsg);
  return (
    <>
      <h1>Registration Form </h1>
      {errorMsg?<div className='alert alert-danger'>
      {errorMsg?.email?.message}
      </div>:''}
      <form className='myForm' onSubmit={sendData}>
        <label htmlFor='first_name'>First Name</label>
        <input onChange={getFormData} type='text' className='form-control my-3' name='first_name' id="first_name"></input>

        <label htmlFor='last_name'>Last Name</label>
        <input onChange={getFormData} type='text' className='form-control my-3' name='last_name' id="first_name"></input>

        <label htmlFor='email'>Email</label>
        <input onChange={getFormData} type='text' className='form-control my-3' name='first_name' id="first_name"></input>

        <label htmlFor='password'>Password</label>
        <input onChange={getFormData} type='password' className='form-control my-3' name='first_name' id="first_name"></input>

        <button type='submit' className='btn btn-primary float-end'>{loading?'Signup':<i className='fas fa-spinner fa-spin'></i>}</button>
      </form>
    </>
  )
}
