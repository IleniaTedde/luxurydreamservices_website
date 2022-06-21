import { useEffect, useState } from "react";

 function Home({slug, baseUrl}) {
  const [api,setApi] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/${slug}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setApi(data);
        })
    },[])

    return (
        <>
         { api && api.seo && <title  dangerouslySetInnerHTML={{ __html: api.seo.title }}></title>  }
         <div className={'mainHome'}>  
           {api &&  api.data && 
         <>
              <h2>{api.data.text}</h2>
              {/* <div className='scrittaAnim'>
              <svg viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                Your tailored dream 
              </text>
            </svg>
            </div> */}
            </>
            } 
              </div>
        </>
    );
}
export default Home
