import Layout from '../../components/layout'
import { authenticateRequest, getData, getAllPostIds } from '../index'

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
      {postData['data'].attributes.title}
      <br/>
      {postData['data'].id}
      <br/>
      {postData['data'].attributes.created_at}
    </Layout>
  )
}
