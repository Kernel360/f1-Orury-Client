import { setupServer } from 'msw/node';
import { serverHandler } from '@/__mock__/handler/server';

export const nodeServer = setupServer(...serverHandler);
