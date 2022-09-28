import React from "react";
import { BackHome, Clap } from "../index";
import styles from './Navbar.module.css'

export const Nav = ({blogs, blogId}) => {
    return( 
        <div className={styles.container}>
            <Clap blogId={blogId} blogs={blogs} />
            <BackHome />
            <span>Hüdayihancerli</span>
        </div>
    )
}