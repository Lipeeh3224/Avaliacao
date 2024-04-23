import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarComponent from './components/NavBarComponent';
import FirstExercise from './exercise/FirstExercise';
import BemVindoExercise from './exercise/BemVindo';
import SobreMimExercise from './exercise/SobreMim';
const router = createBrowserRouter([

  {
    path: "/bemvindo",
    element: <BemVindoExercise/>,
  },
  {
    path: "/exercicio1",
    element: <FirstExercise/>,
  },
  {
    path: "/sobremim",
    element: <SobreMimExercise/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent/>
   <RouterProvider router={router}/> 
  </React.StrictMode>
);
reportWebVitals();
