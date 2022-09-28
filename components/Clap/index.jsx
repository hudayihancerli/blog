import React from "react";
import { useState } from "react";

import styles from './clap.module.css'

export const Clap = ({blogs, blogId}) => {
    
    const [clap, setClap] = useState(blogs[blogId].clap);

    const clapCount = () => {
        setClap(clap + 1);
    }

    return (
        <>  
            <button onClick={clapCount}  className={styles.clapBtn}>
                +<span className={styles.clap}>{clap}</span>
            </button>
        </>
    )
}