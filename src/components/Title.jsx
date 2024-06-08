import { Helmet } from "react-helmet-async";


const Title = ({title}) => {
  return (
    <div>
       <Helmet>
        <title>Shomobay-somity | {title}</title>
      </Helmet>
    </div>
  );
};

export default Title;