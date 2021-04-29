import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { authenticateRequest, getData, getAllPostIds } from '../index'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const token = await authenticateRequest();
  const url = 'https://sebibasti-blog-api.herokuapp.com/posts';
  const blogData = await getData(url, token);
  const paths = await getAllPostIds({ blogData });
  return {
    paths,
    fallback: false
  };
}

export async function getOriginalId(textId) {
  const token = await authenticateRequest();
  const url = 'https://sebibasti-blog-api.herokuapp.com/posts';
  const blogData = await getData(url, token);
  const paths = await getAllPostIds({ blogData });
  const originalId = await paths.find(el => el.params['id'] === textId);
  return await originalId.params['originId']
}

export async function getStaticProps({ params }) {
  const token = await authenticateRequest();
  const id = await getOriginalId(params.id);
  const url = `https://sebibasti-blog-api.herokuapp.com/posts/${id}`;
  const postData = await getData(url, token);
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      <Head>
        <title>{postData['data'].attributes.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData['data'].attributes.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData['data'].attributes.created_at} />
        </div>
      </article>
    {/*  TODO: - implement logic for segments */}
    </Layout>
  )
}
