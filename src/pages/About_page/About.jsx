
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadrumb/Breadcrumb";

const About = ({ slug, baseUrl }) => {
    
    const [api, setApi] = useState(null);
    useEffect(() => {
        fetch(`${baseUrl}/${slug}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setApi(data);
            })
    }, [])

    return (
        <>
            {api && api.seo && <title dangerouslySetInnerHTML={{ __html: api.seo.title }}></title>}
            <div>     {api && api.data &&
               <h2>{api.data.text}</h2>
             }
               </div>
        </>


    );
}
export default About;