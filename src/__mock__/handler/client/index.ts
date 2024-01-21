import communityHandler from '@/__mock__/handler/client/community';
import { setupWorker } from 'msw/browser';
import mapHandler from '@/__mock__/handler/client/map';

export const clientWorker = setupWorker(...communityHandler, ...mapHandler);
