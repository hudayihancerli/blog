import Link from "next/link";

import styles from './BackHome.module.css';

export const BackHome = () => {
    return(
        <div className={styles.backHome}>
            <Link  href={`/`} >&#127968;</Link>
        </div>
    )
}

export default BackHome;