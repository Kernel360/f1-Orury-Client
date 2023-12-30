import communityHandler from '@/__mock__/handler/server/community';
import crewHandler from '@/__mock__/handler/server/crew';
import { setupServer } from 'msw/node';

export const serverWorker = setupServer(...communityHandler, ...crewHandler);
