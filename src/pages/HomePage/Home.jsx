import { useEffect, useState } from "react";
import HeroHome from "../../components/HeroHome/HeroHome";
import ServicesCarouselHome from "../../components/ServicesCarouselHome/ServicesCarouselHome";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";
import SocialCarousel from "../../components/SocialCarousel/SocialCarousel";

 function Home({slug, baseUrl, labels, layout}) {
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
        <HeroHome api={api.data.hero} labels={labels} layout={layout}/>
        {/* <ServicesCarouselHome api={api.data.services} labels={labels} layout={layout}/>  */}
           <ReviewCarousel  api={api.data.review} labels={labels} layout={layout} />
           <SocialCarousel api={api.data.socialCarousel} labels={labels} layout={layout} />
          </> } 
        </div>
       </>
    );
}
export default Home
