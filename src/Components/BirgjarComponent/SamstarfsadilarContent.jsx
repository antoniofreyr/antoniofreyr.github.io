import React from "react";
import styles from "./BirgSamContent.module.css";
import PropTypes from 'prop-types';
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
SamstarfsadilarContent.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    slideLeft: PropTypes.bool,
}

SamstarfsadilarContent.defaultProps = {
    slideLeft: true,
}
 
export default SamstarfsadilarContent