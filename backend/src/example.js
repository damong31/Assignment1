import { initDatabase } from './db/init.js';

import { Post } from './db/models/post.js';

try {
  await initDatabase();
} catch (error) {
  process.exitCode = 1;
}

const post = new Post({
  title: 'Hello Mongoose!',
  author: 'John Jones',
  contents: 'This post is stored in a MongoDB database using Mongoose.',
  tags: ['mongoose', 'mongodb'],
});

const createdPost = await post.save();

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Mongoose!' },
});

const posts = await Post.find();
console.log(posts);
