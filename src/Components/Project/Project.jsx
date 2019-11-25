import React from "react";
import styles from "./Project.module.css";

const Project = ({ name, text, image, animateDuration }) => {
    return ( 
        <div style={{animationDuration: `${animateDuration}s`}} className={styles.verkefnaAnimation1}>
            <div className={styles.verkefnaContainer}>
                <div className={styles.HoverImg}>
                    <img className={styles.verkefniMynd} src={image} alt="Verkefni" draggable="false" />
                        <div className={styles.HoverImg_layer_top}>
                                <div className={styles.HoverImg_text}>
                                    <h2> {name} </h2>
                                    {text}
                                </div>
                        </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Project
