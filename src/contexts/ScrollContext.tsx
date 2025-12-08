import {
  type ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type ScrollContextType = {
  isAtTop: boolean;
};

const ScrollContext = createContext<ScrollContextType>({
  isAtTop: false,
});

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsAtTop(entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: '0px',
      }
    );

    if (sentinelRef.current) obs.observe(sentinelRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <ScrollContext.Provider value={{ isAtTop }}>
      <div
        ref={sentinelRef}
        style={{
          height: '1px',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      />
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };
