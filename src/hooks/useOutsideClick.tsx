import { useEffect, useRef } from 'react';

type UseOutsideClickProps = {
  callback: () => void;
  isOpen: boolean;
};

const useOutsideClick = <T extends HTMLElement>({
  callback,
  isOpen,
}: UseOutsideClickProps) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, callback]);

  return ref;
};

export default useOutsideClick;
