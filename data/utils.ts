import find from 'lodash.find';
import filter from 'lodash.filter';

import commentsData from './comments';
import postsData from './posts';
import usersData from './users';
import { Post, Comment, User } from './types';

// region User
export async function getAllUsers(): Promise<User[]> {
  return usersData;
}

export async function getUserByQuery(
  params: Partial<User>
): Promise<User | undefined> {
  return getAllUsers().then((users) => find(users, params));
}
// endregion

// region Post
export async function getAllPosts(): Promise<Post[]> {
  return postsData;
}

export async function getPostByQuery(
  params: Partial<Post>
): Promise<Post | undefined> {
  return getAllPosts().then((posts) => find(posts, params));
}

export async function getPostsByQuery(params: Partial<Post>): Promise<Post[]> {
  return getAllPosts().then((posts) => filter(posts, params));
}
// endregion

// region Comment
export async function getAllComments(): Promise<Comment[]> {
  return commentsData;
}

export async function getCommentsByQuery(
  params: Partial<Comment>
): Promise<Comment[]> {
  return getAllComments().then((comments) => filter(comments, params));
}
// endregion
