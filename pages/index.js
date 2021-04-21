import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const email = process.env.API_EMAIL;
  const password = process.env.API_PASSWORD;

  const resToken = await fetch(`https://sebibasti-blog-api.herokuapp.com/auth/login?email=${email}&password=${password}`, {
    method: 'post'
  });

  const token = await resToken.json();

  console.log('Check token:');
  console.log(token['auth_token']);

  const resData = await fetch('https://sebibasti-blog-api.herokuapp.com/posts', {
    method: 'get',
    headers: new Headers({
      'Authorization': token['auth_token'],
      'Accept': 'application/vnd.posts.v1+json'
    })
  });

  const blogData = await resData.json()

  if (!blogData) {
    return {
      notFound: true
    }
  }

  console.log('Check data:');
  console.log(blogData);

  return {
    props: { blogData }
  }
}

export default function Home({ blogData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ey guuuuude!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogData['data'].map(({ id, attributes }) => (
            <li className={utilStyles.listItem} key={id}>
              {attributes['title']}
              <br/>
              {id}
              <br/>
              {attributes['created_at']}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
