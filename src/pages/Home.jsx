import { useEffect, useState } from "react";

 function Home({slug, baseUrl}) {
  const [data,setData] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/${slug}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    },[])

    return (
        <>
          {data && 
     <h2>{data.text}</h2>} 
        </>
    );
}
export default Home
