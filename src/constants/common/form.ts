export const CATEGORIES = [
  { label: '자유게시판', value: 1 },
  { label: 'QnA', value: 2 },
] as const;

export const INVALID_MESSAGE = {
  category: '⚠ 카테고리를 선택해주세요.',
  title: '⚠ 글 제목을 입력해주세요.',
  content: '⚠ 글 내용을 입력해주세요.',
} as const;
