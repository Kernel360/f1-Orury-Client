async function mockEnable() {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    const { serverWorker } = await import('@/__mock__/handler/server');
    serverWorker.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { clientWorker } = await import('@/__mock__/handler/client');
    await clientWorker.start({ onUnhandledRequest: 'bypass' });
  }
}

export default mockEnable;
