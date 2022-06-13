import { useEffect, useState } from "react";

 function Home({slug}) {
  const [data,setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/${slug}`)
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
