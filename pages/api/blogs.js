import  { getBlogs }  from "../../src/blogs-description"

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res) => {
    const blogs = await getBlogs();
    res.json({ blogs })
}