import { useEffect, useState } from 'react';

export default function useCss(href: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Event | string | Error | null>(null);

  useEffect(() => {
    let link: HTMLLinkElement = document.querySelector(`link[href="${href}"]`)!;

    if (!link) {
      link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
    }

    const handleLoad = () => setLoading(false);
    const handleError = (error: Event | string | Error) => setError(error);

    link.addEventListener('load', handleLoad);
    link.addEventListener('error', handleError);

    document.head.appendChild(link);

    return () => {
      link.removeEventListener('load', handleLoad);
      link.removeEventListener('error', handleError);
    };
  }, [href]);

  return [loading, error];
}
