import React from "react";

import styles from './Footer.module.css'


export const Footer = () => {
    const date = new Date();


    const leftZero = (num) => {
        num < 10 ? num = 0 + '' + num : num = num;
        return num;
    }

    const years = leftZero(date.getDate()) +  '.' + leftZero(date.getMonth()) + '.' + date.getFullYear()
    
    return (
        <footer className={styles.container} >
            <p>{years} | hudayihancerli <sup>&#169;</sup></p>
        </footer>
    )
}

export default Footer;