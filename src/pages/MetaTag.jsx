import { Helmet } from 'react-helmet';

const MetaTag = ({title , desc}) => {
  return (
    <Helmet>  <title>{title}</title>   <meta name="description" content={desc} /> </Helmet>
  )
}

export default MetaTag