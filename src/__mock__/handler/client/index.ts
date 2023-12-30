import communityHandler from '@/__mock__/handler/client/community';
import { setupWorker } from 'msw/browser';

export const clientWorker = setupWorker(...communityHandler);
