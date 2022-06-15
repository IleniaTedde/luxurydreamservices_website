import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./LuxuryLayout.module.scss";
import React, {useState, useEffect, useRef} from "react";

const LuxuryLayout = ({children, baseUrl}) => {
    const [data, setData] = useState(null);
    const refFooter = useRef(null);
    useEffect(() => {
        fetch(`${baseUrl}/layout`)
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
            <section>
           <Header data={data.header} language={data.language} selector={refFooter}/>   
           </section>
         <div id="main" className={styles.content}>
            {children}
        </div>
        <section ref={refFooter}>
          <Footer data={data.footer}/>  
          </section> 
        </div>}
        </>
    );
};

export default LuxuryLayout;