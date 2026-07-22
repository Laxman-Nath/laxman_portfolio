'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));

    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
        el.classList.add('in-view');
      });
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}