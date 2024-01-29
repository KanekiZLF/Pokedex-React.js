import React, { useState, useEffect } from 'react';
import pokeBall from '../../imgs/arrowTop.png'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const threshold = 100;
    const currentScrollY = window.scrollY;

    setIsVisible(currentScrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <img id='scrollToTop'
          src={pokeBall}
          alt="Voltar ao Topo"
          //style={{ width: '60px', height: '60px', position: 'fixed', bottom: '80px', right: '20px', cursor: 'pointer' }}
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
