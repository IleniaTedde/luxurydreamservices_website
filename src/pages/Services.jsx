
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadrumb/Breadcrumb";
const Services = ({ slug, baseUrl }) => {
    
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
            {api && api.data && <div>
             <h2>{api.data.text}</h2>
            <a href={'/' + locale + '/services/services-single'}> <h2>{'services single page'}</h2> </a>
              </div>}
        </>
    );
}
export default Services;