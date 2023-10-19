import React from 'react'
import './App.scss'
import FirstScreen from './pages/FirstScreen';
import RootLayout from './pages/RootLayout';
import { Provider, useDispatch} from 'react-redux';


// https://web.dev/articles/prefers-color-scheme?hl=ru
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme


import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { store } from './reducers';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='/' element={<FirstScreen />} />
    </Route>
  )
)

 const App = () => {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
 };
 
 export default App;