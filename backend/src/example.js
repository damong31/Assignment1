import { initDatabase } from './db/init.js';

import { Post } from './db/models/post.js';

import dotenv from 'dotenv';
dotenv.config();

try {
  await initDatabase();
} catch (error) {
  process.exitCode = 1;
}

const post = new Post({
  title: 'Hello 2nd Post!',
  author: 'James Johnson',
  contents: 'New Author. New Post.',
  tags: ['frontend'],
});

await post.save();

const posts = await Post.find();
console.log(posts);
