import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';

import {BrowserRouter} from "react-router-dom"
import { Helmet } from 'react-helmet';

const root = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>  <Helmet> <link rel="canonical" href="https://mrmadvertisingdubai.com/" />    <title>MRM | Best Digital Marketing & Advertising Agency in Dubai</title>   <meta name="description" content="Boost your brand with MRM, Dubai's premier digital marketing & advertising agency with SEO, social media marketing and PPC for top visibility and impact" /> </Helmet> <App />  </BrowserRouter> ,
    root
);





