import React from "react";
import styles from './Header.module.css'
import Image from 'next/image'

export const Header = () => {
    return (
        <header className={styles.container}>
            <Image 
                priority
                src='/images/pp.png'
                className={styles.circleImage}
                height={96}
                width={96}
                alt='pp'
            />
            <h1 className={styles.title} >HudayiHancerli</h1>
        </header>
    )
}

export default Header;