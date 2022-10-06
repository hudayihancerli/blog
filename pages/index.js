import { Layout, BlogList } from "../components";

export  function Home(blogs) {
  return (
    <Layout isHome={'yes'}>
      <section>
        <p className="indent-1 my-4">
          Merhabalar, ben Hüdayi Hançerli 😎.<br /> Bilgisayar programcısıyım şu an frontend ve backend alanında kendimi geliştiriyorum. Öğrendiklerimi blog serisi olarak paylaşmayı düşünüyorum. Beni
          <a className="underline decoration-4  decoration-yellow-400 hover:decoration-orange-600" href="https://www.linkedin.com/in/mahmuthudayihancerli/" target={`_blank`}> Linkedin </a>
          ve
          <a className="underline decoration-4  decoration-yellow-400 hover:decoration-orange-600" href="https://github.com/hudayihancerli/" target={`_blank`}> Github </a>
          dan takip edebilirsiniz.
        </p>
      </section>
      <section>
        <h2 className="my-4">📌Blog</h2>
        <hr />
        <div>

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