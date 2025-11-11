import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export type Comment = {
  id: number;
  text: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export const fetchPosts = async (userId?: number | string): Promise<Post[]> => {
  const url = userId
    ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    : `https://jsonplaceholder.typicode.com/posts`;

  const { data } = await axios.get<Post[]>(url);
  return data;
};

export const fetchUserPosts = async (userId: number | string) => {
  const { data } = await axios.get(`${BASE_URL}users/${userId}/posts`);
  return data;
};

export const fetchPostById = async (postId: number | string) => {
  const { data } = await axios.get(`${BASE_URL}posts/${postId}`);
  return data;
};

export const fetchUserAlbums = async (userId: number | string) => {
  const { data } = await axios.get(`${BASE_URL}users/${userId}/albums`);
  return data;
};

export const fetchAlbumPhotos = async (albumId: number | string) => {
  const { data } = await axios.get(`${BASE_URL}albums/${albumId}/photos`);
  return data;
};

export const fetchUserTodos = async (userId: number | string) => {
  const { data } = await axios.get(`${BASE_URL}users/${userId}/todos`);
  return data;
};
