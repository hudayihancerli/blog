import React from "react";
import Layout from "../../components/Layout";
import BackHome from "../../components/BackHome";
import styles from '../../styles/Blog.module.css'

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
    const res = await fetch(`http://localhost:3000/api/blogs`);
    const json = await res.json();
    return {
        props: {
            blogId : blogId,
            blogs: json.blogs
        },
        
    }
}


export default Blog