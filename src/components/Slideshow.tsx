import { useEffect, useState } from 'react';

const IMAGES = [
  '/images/01.gif',
  '/images/02.gif',
  '/images/03.gif',
  '/images/04.gif',
  '/images/05.gif',
  '/images/07.gif',
  '/images/08.gif',
];

export function Slideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setI((n) => (n + 1) % IMAGES.length);
    }, 3500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="hero-slideshow" aria-label="Promotional slideshow">
      {IMAGES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={idx === i ? 'hero-slideshow__img is-active' : 'hero-slideshow__img'}
          width={280}
          height={200}
        />
      ))}
    </div>
  );
}
