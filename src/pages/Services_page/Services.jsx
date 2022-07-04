
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadrumb/Breadcrumb";
import HeroServicesArchive from "../../components/HeroServicesArchive/HeroServicesArchive";
const Services = ({ slug, baseUrl, labels }) => {
    
    const [api, setApi] = useState(null);
    const [locale, setLocale] = useState(null);
    const [link, setLink] = useState(null);
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
                setLink(data.link);
            })
    }, [])

    const slugPage = window.location.pathname.replace('/'+locale+'/','');
    return (
        <>
            {api && api.seo && <title dangerouslySetInnerHTML={{ __html: api.seo.title }} />}
            <div>   
              {api && api.data && 
            <>
            <HeroServicesArchive api={api.data.hero} labels={labels}/>
         { link && link.length > 0 && link.map((e,i) => {
                   if(e.slug === slugPage) {
                   return <div key={'sub' + e} >
                    {e.items && e.items.length > 0 && e.items.map((el, index) => {
                        return <a key={'sub' + el.slug} style={{display: 'flex'}} href={'/' + locale + el.url}>{el.slug}</a>
                    })} 
                   </div> 
                   }
             })
             } 
            </> }
              </div>
        </>
    );
}
export default Services;