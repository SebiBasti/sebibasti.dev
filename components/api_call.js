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