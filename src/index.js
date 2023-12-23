import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';

import {BrowserRouter} from "react-router-dom"
import { Helmet } from 'react-helmet';

const root = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>  <Helmet>   <title>Best Advertising & Digital Marketing Agency in Dubai </title>   <meta name="description" content="Leading Advertising and digital marketing agency in Dubai offers full advertising services and digital marketing solutions to help businesses achieve growth" /> </Helmet> <App />  </BrowserRouter> ,
  document.getElementById('root')
);





