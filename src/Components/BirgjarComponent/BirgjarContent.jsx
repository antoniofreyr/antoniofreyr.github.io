import React from "react";
import styles from "./BirgSamContent.module.css";
import PropTypes from 'prop-types';
const BirgjarContent = ({ logo, text, link ,slideLeft}) => {
    console.log(slideLeft);
    if (slideLeft) {
        return ( 
            <div>
                <div className={styles.birgjarContainer}>
                    <a href={link}>
                        <img className={styles.birgjarlogo} src={logo} alt="Birgjar" draggable="false" />
                    </a>
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
                    <a href={link}>
                        <img className={styles.birgjarlogo} src={logo} alt="Birgjar" draggable="false" />
                    </a>
                </div>
            </div> 
        );
    }

    
}
BirgjarContent.propTypes = {
    logo: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    slideLeft: PropTypes.bool,
}

BirgjarContent.defaultProps = {
    email: "ekki gefið",
    slideLeft: true,
}
 
export default BirgjarContent
