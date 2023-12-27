import React from 'react';
import {createRoot} from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';

import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById("root")).render(<BrowserRouter>  <App />  </BrowserRouter>)
// ReactDOM.render(
//     <BrowserRouter>  <App />  </BrowserRouter> ,
//     document.getElementById("root")
// );





