import React from "react";
import styles from "./BirgSamContent.module.css";

const SamstarfsadilarContent = ({ name, text, slideLeft}) => {
    console.log(slideLeft);
    if (slideLeft) {
        return ( 
            <div>
                <div className={styles.birgjarContainer}>
                    <h2 className={styles.samstarfsnafn}>{name}</h2>
                    <p className={styles.birgjartexti1}>
                        {text}
                    </p>
    
                </div>
            </div> 
        );
    } else {
        return ( 
            <div>
                <div className={styles.birgjarContainer}>
                    <p className={styles.birgjartexti2}>
                        {text}
                    </p>
                    <h2 className={styles.samstarfsnafn}>{name}</h2>
                </div>
            </div> 
        );
    }

    
}
 
export default SamstarfsadilarContent