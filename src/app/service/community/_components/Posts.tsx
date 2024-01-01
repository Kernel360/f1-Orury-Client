'use client';

import Post from '@/app/service/community/_components/Post';
import { postsMock } from '@/__mock__/data/posts.mock';

function Posts() {
  const posts = postsMock;
  // const { categoryId } = usePostsState();
  // const [posts, setPosts] = useState<PostsProps[]>([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const fetchedPosts = await getPosts(categoryId);
  //     setPosts(fetchedPosts);
  //   };

  //   fetchPosts();
  // }, [categoryId]);

  return (
    <ul className="px-4">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
}

export default Posts;
