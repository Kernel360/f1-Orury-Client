import communityHandler from '@/__mock__/handler/server/community';
import crewHandler from '@/__mock__/handler/server/crew';
import mapHandler from '@/__mock__/handler/server/map';

export const serverHandler = [
  ...communityHandler,
  ...crewHandler,
  ...mapHandler,
];
