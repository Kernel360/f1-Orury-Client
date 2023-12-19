import React from 'react';
import Post from '@/app/_components/community/Post';
import SearchBar from '@/app/_components/community/SearchBar';
import Tabs from '@/app/_components/community/Tabs';
import getPosts from '@/app/(domain)/community/api/getPosts';
import { randomUUID } from 'crypto';
import Floating from '@/app/_components/ui/buttons/Floating';

async function page() {
  const posts = await getPosts();

  return (
    <div className="relative bg-white pb-16">
      <SearchBar />
      <Tabs />
      <ul className="mx-4">
        {posts.map(post => (
          <Post key={randomUUID()} {...post} />
        ))}
      </ul>
      <Floating />
    </div>
  );
}

export default page;
