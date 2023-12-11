import React from 'react';
import Post from '@/app/_components/community/Post';
import getPosts from './api/getPosts';

async function page() {
  const posts = await getPosts();

  return (
    <ul className="mx-4">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
}

export default page;
