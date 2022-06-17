import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./LuxuryLayout.module.scss";
import React, {useState, useEffect, useRef} from "react";

const LuxuryLayout = ({children, baseUrl, slug}) => {
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);
    const refFooter = useRef(null);
    useEffect(() => {
        fetch(`${baseUrl}/layout`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })

            fetch(`${baseUrl}/labels`)
            .then(res => {
                return res.json();
            })
            .then(labels => {
                setLabels(labels);
            })
    }, [])
    return (  
        <>
        {data && labels && 
        <div className={styles.LuxuryLayout}>
             <section>
             <Header data={data.header} language={data.language} social={data.social} selector={refFooter} locale={data.locale} labels={labels} slugPage={slug}/>  
           </section> 
         <div id="main" className={styles.content}>
            {children}
        </div>
        <section ref={refFooter}>
          <Footer data={data.footer} locale={data.locale} labels={labels} slugPage={slug} />  
          </section> 
        </div>}
        </>
    );
};

export default LuxuryLayout;