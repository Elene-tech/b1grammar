import { useEffect, useState } from 'react';

function readHash(): string {
  return window.location.hash.replace(/^#/, '') || '/';
}

export function useHashRoute(): string {
  const [route, setRoute] = useState(readHash);
  useEffect(() => {
    const onChange = () => setRoute(readHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function navigate(path: string) {
  window.location.hash = path;
}
