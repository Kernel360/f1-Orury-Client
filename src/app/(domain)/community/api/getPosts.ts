import CustomError from '@/error/CustomError';

const getPosts = async () => {
  try {
    const response = await fetch(`${process.env.API_URL!}/api/posts`);

    if (!response.ok) {
      throw new Error('no response');
    }

    return (await response.json()) as Post[];
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error('something went to wrong');
  }
};

export default getPosts;
