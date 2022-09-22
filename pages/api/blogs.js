import { getBlogs } from "../../src/blogsDescription"

export default async(req, res) => {
    const blogs = await getBlogs();
    res.json({ blogs })
}