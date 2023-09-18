import React from 'react';
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/"><h3>Noxe</h3></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      {!props.auth?<>
        <li className="nav-item">
          <NavLink className="nav-link" to='/home'>Home</NavLink>
        </li>

          
        <li className="nav-item">
          <NavLink className="nav-link" to='/movie'>Movies</NavLink>
        </li>

          
        <li className="nav-item">
          <NavLink className="nav-link" to='/tv'>Tv Show</NavLink>
        </li>

          
        <li className="nav-item">
          <NavLink className="nav-link" to='/people'>People</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/network'>Networks</NavLink>
        </li>
      </>:<>
      <li className="nav-item">
          <NavLink className="nav-link" to='/signup'>signUp</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/Signin'>signIn</NavLink>
        </li></>}
      </ul>

     {!props.auth?<>
      
      <ul className="navbar-nav mb-2 mb-lg-0">
      
        <li className="nav-item">
          <NavLink className="nav-link to='/logout'">Logout</NavLink>
        </li>

      </ul>
     </>:''}

    </div>
  </div>
</nav>
    </>
  )
}
