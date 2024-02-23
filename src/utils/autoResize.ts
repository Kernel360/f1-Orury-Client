const autoResize = (textarea: HTMLTextAreaElement) => {
  const maxHeight = window.innerHeight / 2; // 디바이스 높이의 절반을 최대 높이로 설정

  textarea.style.height = 'auto';

  if (textarea.scrollHeight <= maxHeight) {
    textarea.style.height = `${textarea.scrollHeight}px`;
  } else {
    // 입력된 내용의 높이가 최대 높이를 초과하는 경우 높이를 최대 높이로 조절
    textarea.style.height = `${maxHeight}px`;
    textarea.style.overflowY = 'auto';
  }
};

export default autoResize;
