import { useEffect } from 'react';

const useAppleAuth = () => {
  useEffect(() => {
    const loadAppleScript = () => {
      const existingScript = document.getElementById('apple-login-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'apple-login-script';
      script.src =
        'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
      script.onerror = () => {
        throw new Error('Apple login script를 가져오는데 실패했습니다.');
      };
      document.body.appendChild(script);
    };

    loadAppleScript();

    // 컴포넌트 언마운트 시 스크립트 태그 제거
    return () => {
      const existingScript = document.getElementById('apple-login-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
};

export default useAppleAuth;
