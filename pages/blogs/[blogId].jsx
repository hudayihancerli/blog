import React from "react";

import styles from '../../styles/Blog.module.css'

import {Layout, BackHome} from '../../components'

export const Blog = ({blogs,blogId}) => {
    if(!blogId) 
    {
        return <h1>Hata</h1>
    }else{
        blogId = blogId - 1 
        
        return (
            <Layout>
            <BackHome />
            <h1 className={styles.title}>{blogs[blogId].cardTitle}</h1>
            <span className={styles.blogDate}>{blogs[blogId].blogDate}</span>
            <p className={styles.paragraph}>{blogs[blogId].cardDescription}</p>
            </Layout>
        )
    }    
}

export const getServerSideProps = async (context) => {
    const { blogId } = context.params;
    // http://localhost:3000/api/blogs
    const res = await fetch(`http://blogum-ten.vercel.app/api/blogs`);
    const json = await res.json();
    return {
        props: {
            blogId : blogId,
            blogs: json.blogs
        },
        
    }
}


export default Blog