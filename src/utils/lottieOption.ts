const lottieOption = (animationData: any) => {
  return {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
};

export default lottieOption;
