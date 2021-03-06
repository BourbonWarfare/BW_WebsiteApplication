import axios from 'axios';

export const getPosts = async (category?: any, page?: number) => {
  // http request to get posts
  const load = await axios.get(`/posts/?page=${page}`).then((response: any) => {
    console.log('response from getPosts: ', response.data.results);
    return response.data.results;
  });
  const data = await load;
  return data;
  // const res = await axios.get('/posts');
  // console.log('Result: ', res);
  // return res;
  // .then((response: any) => {
  //   console.log(response);
  // });
  // await axios.get('http://localhost:8080/posts').then((response: any) => {
  //   console.log(response);
  // });
};

export const getCategoryPosts = async (category: any, page?: number) => {
  const load = await axios
    .get(`/posts/${category}/?page=${page}`)
    .then((response: any) => {
      console.log('response from getCategoryPosts: ', response.data.results);
      return response.data.results;
    });
  const data = await load;
  return data;
};

// export const getUsernamePosts = async (username: any, page?: number) => {
//   const load = await axios
//     .get(`/posts/${username}/?page=${page}`)
//     .then((response: any) => {
//       console.log(response.data[0]);
//       return response.data[0];
//     });
//   const data = await load;
//   return data;
// };

export const getSinglePost = async (postId?: string, category?: string) => {
  const load = await axios
    .get(`/posts/${category}/${postId}`)
    .then((response: any) => {
      console.log('get single post result: ', response);
      return response.data.results;
    });
  const data = await load;
  return data;
};

export const getUserInfo = async (userId?: string) => {
  const load = await axios.get(`/users/${userId}`).then((response: any) => {
    console.log('get user: ', response.data.results);
    return response.data.results[0];
  });
  const data = await load;
  return data;
};

export const getMissions = async (missionType: string, page?: number) => {
  // debugger;
  const load = await axios
    .get(`/missions/${missionType}/?page=${page}`)
    .then((response: any) => {
      console.log('get untested missions', response);
      return response.data.results;
    });
  const data = await load;
  return data;
};
