import React from "react";
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

// const ref = React.createRef();

function App() {

  return (
    <div>
 
      <RouterProvider router={router}>
     
      </RouterProvider>
    </div>
  );
}

export default App;


