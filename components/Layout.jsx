import React from "react";

import Head from 'next/head'

import { Header, Footer } from ".";


export const Layout = ({ children, isHome}) => {
    return (
        <div className="container mx-auto px-8 py-8 max-w-2xl bg-white">

            <Head> 
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="description"
                    content="Hüdayi hançerlinin kişisel blog'u"
                />
                <meta name="title" content="hudayihancerli" />
                <meta name="twitter:card" content="../../public/images/pp.png" />
                <title>hudayihancerli</title>
            </Head>

            {isHome ? <Header /> : null}
            
            <main>{children}</main>

            <Footer />

        </div>
    )
}
