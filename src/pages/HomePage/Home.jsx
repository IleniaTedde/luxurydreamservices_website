import { useEffect, useState } from "react";
import HeroHome from "../../components/HeroHome/HeroHome";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";

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
     {api && api.data &&   <>
        <HeroHome api={api.data.hero}></HeroHome> 
           <ReviewCarousel  api={api.data.review}/> 
          </> } 
        </div>
       </>
    );
}
export default Home
