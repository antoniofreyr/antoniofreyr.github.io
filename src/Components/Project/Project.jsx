import React from "react";
import styles from "./Project.module.css";
import PropTypes from 'prop-types'

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
Project.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.string,
    animateDuration: PropTypes.number,
}

Project.defaultProps = {
    text: " ",
    animateDuration: 0,
} 
export default Project
