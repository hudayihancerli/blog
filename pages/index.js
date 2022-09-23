import Layout from "../components/Layout";
import BlogList from "../components/BlogsList";
import styles from "../styles/Home.module.css";



export  function Home(blogs) {
  return (
    <Layout isHome={'yes'}>
      <section className={styles.description}>
        <p>
          Merhabalar, ben Hüdayi Hançerli 😎. Bilgisayar programcısıyım şu an frontend ve backend alanında kendimi geliştiriyorum. Öğrendiklerimi blog serisi olarak paylaşmayı düşünüyorum. Beni&nbsp;<a href="https://www.google.com" target={`_blank`} className={styles.outLink}>Linkedin</a>&nbsp;ve&nbsp;<a href="https://www.google.com" className={styles.outLink}  target={`_blank`}>Github</a>&apos;dan takip edebilirsiniz.
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
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const json = await res.json();
  return {
      props: {
        blogs: json.blogs
      },
  }
}

export default Home;