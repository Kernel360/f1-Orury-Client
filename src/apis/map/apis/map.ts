import { END_POINT } from '@/constants/api/end-point';
import { axiosInstance } from '@/lib/axios/axios-instance';

const mapApi = {
  postGymLike: (gymId: number) =>
    axiosInstance.post(END_POINT.gymLikeController.default(gymId)),
  deleteGymLike: (gymId: number) =>
    axiosInstance.delete(END_POINT.gymLikeController.default(gymId)),
};

export default mapApi;
