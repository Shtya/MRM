import { Helmet } from 'react-helmet';
import {baseWEB} from '../API/API';

const MetaTag = ({title , desc , canonical , script1 }) => {
  return (
    <Helmet>  
      <title>{title}</title>   
      <link rel="canonical" href={`${baseWEB+canonical}`} />
      <meta name="description" content={desc} /> 
      <script type="application/ld+json">{` `}</script>
    </Helmet>
  )
}

export default MetaTag


// <meta property="og:title" content="Your Page Title" />
//         <meta property="og:description" content="Your page description" />
//         <meta property="og:image" content="URL to your image" />
//         <meta property="og:url" content="URL to your page" />
//         <meta property="og:type" content="website" />