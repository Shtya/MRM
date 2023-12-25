import React from 'react'
import {Routes , Route} from "react-router-dom"
import "./sass/main.css"
import "./sass/sass-main/second.css" 
import "./blog/sass/blog.css"

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import S_SEO from './pages/S_SEO'
import S_WebDesign from './pages/S_WebDesign'
import S_Media from './pages/S_Media'
import M_Signages from './pages/M_Signages'
import S_Branding from './pages/S_Branding'
import S_Gifts from './pages/S_Gifts'
import S_Exhibition from './pages/S_Exhibition'
import S_photography from './pages/S_photography';

import Facebook from './components/Social-media/Facebook'
import Instagram from './components/Social-media/Instagram'
import Snapchat from './components/Social-media/Snapchat'
import Linkedin from './components/Social-media/Linkedin'
import Tiktok from './components/Social-media/Tiktok'
import X from './components/Social-media/X'
import SlideNav from './components/SlideNav'


import BlogDetails from './components/BlogDetails'
import Dashboard from './blog/Dashboard'
import BlogsAll from './blog/BlogsAll'
import E_post from './blog/E_post'
import { AnimatePresence } from 'framer-motion'



const App = () => {

  return ( 
    <div className='App'>
      
      <AnimatePresence >
      <SlideNav whats={false} />
      
      <Routes>

        <Route index               element={<Home />} />                           
        <Route path='/contact-us'  element={<ContactUs />} />                           
        <Route path='/about-us'    element={<AboutUs />} />                          
        <Route path='*'            element={<Error />} />                        
        <Route path='/privacy'     element={<Privacy />} />                          
        <Route path='/terms'       element={<Terms />} />                          
        
        <Route path='/web-design'  element={<S_WebDesign/>} />                        
        <Route path='/photography-and-videography' element={<S_photography />} />                        
        <Route path='/Exhibition-and-display-stand'  element={<S_Exhibition  />} />                        
        <Route path='/indoor-and-outdoor-signages'    element={<M_Signages />} />                        
        <Route path='/social-media-marketing'   element={<Landing />} />                        
        <Route path='/gifts'      element={<S_Gifts  />} />                        
        <Route path='/media-buying'       element={<S_Media />} />                        
        <Route path='/branding'    element={<S_Branding  />} />                        
        <Route path='/seo'         element={<S_SEO />} />                        

        <Route path="/dashboard"      element={<Dashboard />} /> 
        <Route path="/MRM"            element={<BlogsAll />} /> 
        <Route path="/edite-blog/:id" element={<E_post />} /> 
        <Route path="/blog/:id"       element={<BlogDetails />} />
        <Route path='/blog'           element={<Blogs />} /> 

        <Route path='/facebook'  element={<Facebook />} />                        
        <Route path='/snapchat'  element={<Snapchat />} />                        
        <Route path='/instagram' element={<Instagram />} />                        
        <Route path='/x'         element={<X />} />                        
        <Route path='/linkedin'  element={<Linkedin />} />                        
        <Route path='/tiktok'    element={<Tiktok />} />                        

      </Routes>
      </AnimatePresence>
    </div>

  )
}

export default App




