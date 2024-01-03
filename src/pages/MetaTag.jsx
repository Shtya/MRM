import { Helmet } from 'react-helmet';
import {baseWEB} from '../API/API';
import Logo from "../assets/Logo.png"
const MetaTag = ({title , desc , canonical , schema }) => {
  return (
    <Helmet>  
      <title>{title}</title>   
      <link rel="canonical" href={`${baseWEB+canonical || ""}`} />
      <link rel="icon" href={Logo} />
      <meta name="description" content={desc} /> 
      <meta property="og:url" content={baseWEB} />
      <a href='/en-us' hrefLang='en-us' rel='alternate' />
      <a href='/ar-ae' hrefLang='ar-ae' rel='alternate' />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default MetaTag
