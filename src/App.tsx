import React from 'react'
import './app.scss'
import FirstScreen from './pages/first-screen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


 const App = () => {
  return (
    <FirstScreen/>
  );
 };
 
 export default App;