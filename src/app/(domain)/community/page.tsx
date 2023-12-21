import React from 'react';
import getPosts from '@/app/(domain)/community/api/getPosts';
import { randomUUID } from 'crypto';
import Floating from '@/app/ui/buttons/Floating';
import Post from '@/app/(domain)/community/_components/Post';
import SearchBar from '@/app/(domain)/community/_components/SearchBar';
import Tabs from '@/app/(domain)/community/_components/Tabs';

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
