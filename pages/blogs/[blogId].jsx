import React from "react";
import Layout from "../../components/Layout";
import BackHome from "../../components/Back-home";
import styles from '../../styles/Blog.module.css'

export const Blog = ({blogs,blogId}) => {
    return (
        <Layout>
            <BackHome />
            <h1 className={styles.title}>{blogs[blogId].cardTitle}</h1>
            <span className={styles.blogDate}>{blogs[blogId].blogDate}</span>
            <p className={styles.paragraph}>{blogs[blogId].cardDescription}</p>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { blogId } = context.params;
    const res = await fetch(`http://localhost:3000/api/blogs`);
    const json = await res.json();
    return {
        props: {
            blogId : blogId-1,
            blogs: json.blogs
        },
        
    }
}


export default Blog