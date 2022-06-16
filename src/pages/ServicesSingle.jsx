
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadrumb/Breadcrumb";
const ServicesSingle = ({ slug, baseUrl }) => {
    
    const [api, setApi] = useState(null);
    const [locale, setLocale] = useState(null);
    useEffect(() => {
        fetch(`${baseUrl}/${slug}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setApi(data);
            })

            fetch(`${baseUrl}/layout`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setLocale(data.locale);
            })
    }, [])

    return (
        <>
            {api && api.seo && <title dangerouslySetInnerHTML={{ __html: api.seo.title }} />}
            <div>
            {api && api.breadcrumb &&    <Breadcrumb breadcrumb={api.breadcrumb} /> } 
            {api && api.data &&
              <h2>{api.data.text}</h2> }
            </div>
        </>
    );
}
export default ServicesSingle;