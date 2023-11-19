import path from 'path';
import fs from 'fs/promises';
import find from 'lodash.find';
import filter from 'lodash.filter';

import { Post, Comment, User } from './types';

async function readDataFile<T>(fileName: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'data', fileName);
  return fs
    .readFile(filePath)
    .then((json) => JSON.parse(json as unknown as string));
}

// region User
export async function getAllUsers(): Promise<User[]> {
  return readDataFile('users.json');
}

export async function getUserByQuery(
  params: Partial<User>
): Promise<User | undefined> {
  return getAllUsers().then((users) => find(users, params));
}
// endregion

// region Post
export async function getAllPosts(): Promise<Post[]> {
  return readDataFile('posts.json');
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
  return readDataFile('comments.json');
}

export async function getCommentsByQuery(
  params: Partial<Comment>
): Promise<Comment[]> {
  return getAllComments().then((comments) => filter(comments, params));
}
// endregion
