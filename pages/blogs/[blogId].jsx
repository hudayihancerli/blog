import React from "react";

import {Layout, Nav} from '../../components'

export const Blog = ({blogs,blogId}) => {

    if(!blogId) 
    {
        return <h1>Blog bulunamadı</h1>
    }else{
        blogId = blogId - 1 
        
        return (
            <Layout>
            <Nav blogs={blogs} blogId={blogId} />
            <h1 className="text-2xl" >{blogs[blogId].cardTitle}</h1>
            <div className="my-2">{blogs[blogId].blogDate}</div>
            <p className=" indent-4">{blogs[blogId].cardDescription}</p>
            </Layout>
        )
    }    
}

export const getServerSideProps = async (context) => {
    const { blogId } = context.params;
    
    const localhost = `http://localhost:3000/api/blogs`;
    const vercel = `http://blogum-ten.vercel.app/api/blogs`;
  
    const res = await fetch(localhost);
    const json = await res.json();
    return {
        props: {
            blogId : blogId,
            blogs: json.blogs
        },
        
    }
}


export default Blog