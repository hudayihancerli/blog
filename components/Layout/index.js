import React from "react";

import Head from 'next/head'

import Header from "../Header/index"
import Footer from "../Footer/index"

import styles from './Layout.module.css'


export const Layout = ({ children, isHome}) => {
    return (
        <div className={styles.container}>
            <Head> 
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="description"
                    content="Hüdayi hançerlinin kişisel blog'u"
                />
                <meta name="title" content="hudayihancerli" />
                <meta name="twitter:card" content="/images/pp.jpg" />
                <title>hudayihancerli</title>
            </Head>

            
             {isHome ? <Header /> : null}
            

            <main>{children}</main>
            <Footer />

        </div>
    )
}

export default Layout;