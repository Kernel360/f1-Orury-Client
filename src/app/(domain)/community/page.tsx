import React from 'react';
import Post from '@/app/_components/community/Post';
import SearchBar from '@/app/_components/community/SearchBar';
import Tabs from '@/app/_components/community/Tabs';
import getPosts from './api/getPosts';

async function page() {
  const posts = await getPosts();

  return (
    <div>
      <SearchBar />
      <Tabs />
      <ul className="mx-4">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
}

export default page;
