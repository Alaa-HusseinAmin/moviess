import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home.jsx';
import ItemDetails from "./Components/ItemDetails/ItemDetails.jsx";
import Movie from './Components/Movies/Movie.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import People from './Components/People/People.jsx';
import SignIn from './Components/Signin/Signin.jsx';
import SignUp from './Components/Signup/Signup.jsx';
import Tv from './Components/Tv/Tv.jsx';
import AuthLayout from './Layouts/AuthLayout';
import RootLayout from './Layouts/RootLayout.jsx';

function App() {
  function ProtectedRoutes(props){
    let token=localStorage.getItem('token')
    if(!token){
      return <Navigate to="/signIn"/>
    }else{
      //home 
      return props.children
    }
  }
  let router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,children:[
      {index:true,element:<ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"home",element:<ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"tv",element:<Tv/>},
      {path:"movie",element:<Movie/>},
      {path:"people",element:<People/>},
      {path:"details/:id/:media",element:<ItemDetails/>},
      {path:"*",element: <NotFound/>}
    ]} ,
    {path:'/',element:<AuthLayout/>,children:[
      {index:true,element:<SignIn/>},
      {path:"SignIn",element:<SignIn/>},
      {path:"SignUp",element:<SignUp/>},
    ]} 
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
