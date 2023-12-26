import { Helmet } from 'react-helmet';
import {baseWEB} from '../API/API';

const MetaTag = ({title , desc , canonical , schema }) => {
  return (
    <Helmet>  
      <title>{title}</title>   
      <link rel="canonical" href={`${baseWEB+"canonical"}`} />
      <meta name="description" content={desc} /> 
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={baseWEB} />
    </Helmet>
  )
}

export default MetaTag


// <meta property="og:title" content="Your Page Title" />
//         <meta property="og:description" content="Your page description" />
//         <meta property="og:image" content="URL to your image" />
//         <meta property="og:url" content="URL to your page" />
//         <meta property="og:type" content="website" />