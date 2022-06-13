import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./LuxuryLayout.module.scss";
import React, {useState, useEffect} from "react";

const LuxuryLayout = ({children}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/layout`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    }, [])


    return (  
        <>
        {data && 
        <div className={styles.LuxuryLayout}>
           <Header data={data.header}/>   
         <div id="main" className={styles.content}>
            {children}
        </div>
          <Footer data={data.footer}/>   
        </div>}
        </>
    );
};

export default LuxuryLayout;