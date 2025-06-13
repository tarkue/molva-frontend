import { useEffect, useRef, useState } from 'react';

export const useWidth = (
  ref: React.RefObject<HTMLElement | null>,
) => {
  const [width, setWidth] = useState(ref.current?.offsetWidth);

  useEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [ref.current]);

  useEffect(() => {
    const handleResize = () => setWidth(ref.current?.offsetWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export const useBodyWidth = () => {
  const ref = useRef<HTMLElement>(document.body);
  return useWidth(ref);
};
