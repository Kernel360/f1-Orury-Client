class CustomError extends Error {
  reponse?: {
    status: number;
    message: string;
    data: any;
  };
}

export default CustomError;
