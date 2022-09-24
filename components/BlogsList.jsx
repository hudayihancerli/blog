import Link from "next/link";
import styles from '../styles/BlogsList.module.css';

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
      <div className={styles.card} key={blog.id}>
          <div className={styles.cardHead}>
            <h4 className={styles.cardTitle}>{blog.cardTitle}</h4> 
            <p className={styles.blogDate}>{blog.blogDate}</p>
            <p className={styles.readTime}>{blog.readTime}</p>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.cardDescription}>
              {
                maxCharacter(blog.cardDescription)
              }
               ...
            </p>
            <Link href={`/blogs/${blog.id}`}><a className={styles.readMore}>Devamını oku</a></Link>
          </div>
        </div>
       ) )
    )
}

export default BlogList;