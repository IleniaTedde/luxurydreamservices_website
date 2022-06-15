
import { useEffect, useState } from "react";
const Services = ({ slug, baseUrl }) => {
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
            {api && api.seo && <title dangerouslySetInnerHTML={{ __html: api.seo.title }} />}
            {api && api.data &&
                <h2>{api.data.text}</h2>}
        </>


    );
}
export default Services;