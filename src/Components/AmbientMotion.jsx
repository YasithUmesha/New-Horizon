import { useEffect } from 'react';
import { animate } from 'animejs';

const AmbientMotion = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const animation = animate('.ambient-orb', {
      translateX: 90,
      translateY: -35,
      scale: 1.15,
      direction: 'alternate',
      loop: true,
      duration: 7000,
      ease: 'inOut(3)',
    });

    return () => animation.pause();
  }, []);

  return (
    <>
      <span className="ambient-orb ambient-orb-cyan" aria-hidden="true" />
      <span className="ambient-orb ambient-orb-coral" aria-hidden="true" />
    </>
  );
};

export default AmbientMotion;
