import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export async function authenticateRequest() {
  const email = process.env.API_EMAIL;
  const password = process.env.API_PASSWORD;
  const url = `https://sebibasti-blog-api.herokuapp.com/auth/login?email=${email}&password=${password}`

  const resToken = await fetch(url, {
    method: 'post'
  });

  return await resToken.json();
}

export async function getData(url, token) {
  const resData = await fetch(url, {
    method: 'get',
    headers: new Headers({
      'Authorization': token['auth_token'],
      'Accept': 'application/vnd.posts.v1+json'
    })
  });

  const blogData = await resData.json();

  if (!blogData) {
    return {
      notFound: true
    }
  }

  return await blogData;
}

export async function getAllPostIds({ blogData }) {
  return await blogData.data.map(obj => {
    return {
      params: {
        id: obj.attributes.title.replace(/\s/g, '-').replace(/[?]/g, ''),
        originId: obj.id // include original id for API request
      }
    }
  });
}

export async function getStaticProps() {
  const token = await authenticateRequest();
  const url = 'https://sebibasti-blog-api.herokuapp.com/posts'
  const blogData = await getData(url, token);

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
