import CustomError from '@/error/CustomError';

const getDetail = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL!}/api/posts/${id}`);

    if (!response.ok) {
      throw new Error('no response');
    }

    return (await response.json()) as PostDetailProps;
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new Error(error.message);
    }

    throw new Error('something went to wrong');
  }
};

export default getDetail;
