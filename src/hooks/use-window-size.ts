import React from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState<number | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}
