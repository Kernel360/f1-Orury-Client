import communityHandler from '@/__mock__/handler/server/community';
import crewHandler from '@/__mock__/handler/server/crew';

export const serverHandler = [...communityHandler, ...crewHandler];
