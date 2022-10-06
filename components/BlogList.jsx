import Link from "next/link";

export const BlogList = ({blogs}) => {

  const maxCharacter = (text) => {
    let i = 75;
    if(text.length > i){
      while (i > 10) {
        if(text[i] == ' '){
          text = text.substring(0, i)
          break;
        }
        i++
      }
    }
    return text;
  }
  
  return(
    blogs.map((blog) =>(
      <div key={blog.id} className="p-4 bg-gradient-to-r from-sky-50 via-neutral-50  to-sky-100 my-4 rounded-xl transition ease-in-out  shadow-md shadow-sky-500/50  hover:shadow-sky-500 ">
          <div className="flex flex-wrap pb-4 gap-2">
            <h4 className="capitalize text-blue-600 hover:text-blue-400">{blog.cardTitle}</h4> 
            <p className="text-slate-700">{blog.blogDate}</p>
            <p className="text-green-700">{blog.readTime}</p>
          </div>
          <div>
            <p className="indent-3 mb-3">
              {
                maxCharacter(blog.cardDescription)
              }...
            </p>
            <Link href={`/blogs/${blog.id}`}>
              <a className="text-orange-600 p-2 mt-1 rounded-md bg-sky-200 hover:bg-sky-600 hover:text-white transition ease-in-out">Devamını oku</a>
            </Link>
          </div>
        </div>
       ) )
    )
}