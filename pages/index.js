import styles from "../styles/Home.module.css";

import { Layout, BlogList } from "../components";


export  function Home(blogs) {
  return (
    <Layout isHome={'yes'}>
      <section className={styles.description}>
        <p>
          Merhabalar, ben Hüdayi Hançerli 😎. Bilgisayar programcısıyım şu an frontend ve backend alanında kendimi geliştiriyorum. Öğrendiklerimi blog serisi olarak paylaşmayı düşünüyorum. Beni&nbsp;<a href="https://www.linkedin.com/in/mahmuthudayihancerli/" target={`_blank`} className={styles.outLink}>Linkedin</a>&nbsp;ve&nbsp;<a href="https://github.com/hudayihancerli/" className={styles.outLink}  target={`_blank`}>Github</a>&apos;dan takip edebilirsiniz.
        </p>
      </section>
      <section>
        <h2>📌Blog</h2>
        <br /><hr />
        <div className={styles.cards}>

          <BlogList {...blogs} />

        </div>
      </section>      
    </Layout>
  )
}

export const getServerSideProps = async () => {
  
  const localhost = `http://localhost:3000/api/blogs`;
  const vercel = `http://blogum-ten.vercel.app/api/blogs`;

  const res = await fetch(vercel);
  const json = await res.json();

  return {
      props: {
        blogs: json.blogs
      },
  }
}

export default Home;