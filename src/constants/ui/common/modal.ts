import { EOL } from 'os';

export const MODAL = {
  withdrawal: {
    title: '회원 탈퇴',
    content: `회원 탈퇴를 진행하시겠습니까? ${EOL}한번 삭제된 정보는 복구할 수 없습니다.`,
    okContent: '탈퇴',
  },
  deleteComment: {
    title: '댓글 삭제',
    content: `댓글을 삭제하시겠습니까? ${EOL}삭제된 내용은 복구할 수 없습니다.`,
    okContent: '삭제',
  },

  deletePost: {
    title: '게시글 삭제',
    content: `게시글을 삭제하시겠습니까? ${EOL}삭제된 내용은 복구할 수 없습니다.`,
    okContent: '삭제',
  },
} as const;
