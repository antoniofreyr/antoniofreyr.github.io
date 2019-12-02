import React from "react";
import styles from "./Card.module.css";
import PropTypes from 'prop-types'

const Card = ({ name, title, phone, email, image, animateDuration }) => {
    return ( 
        <div style={{animationDuration: `${animateDuration}s`}} className={styles.cardContainer}>
            <img className={styles.cardImage} src={image} alt="Employee" draggable="false" />
            <div className={styles.textContainer}>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <h3>{phone}</h3>
                <a href={`mailto: ${email}`}>{email}</a>
            </div>
        </div> 
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    email: PropTypes.string,
    image: PropTypes.string,
    animateDuration: PropTypes.number,
}

Card.defaultProps = {
    phone: "Ekki gefið",
    email: "Ekki gefið",
    animateDuration: 0,
}
 
export default Card