'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

export default function ThemeToggle() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setMode(saved);
    apply(saved);
  }, []);

  function apply(next) {
    document.documentElement.classList.remove('light', 'dark');
    if (next !== 'system') document.documentElement.classList.add(next);
    localStorage.setItem('theme', next);
  }

  function cycle() {
    const order = ['dark', 'light', 'system'];
    const next = order[(order.indexOf(mode) + 1) % order.length];
    setMode(next);
    apply(next);
  }

  const icons = {
    dark: <FiMoon size={16} />,
    light: <FiSun size={16} />,
    system: <FiMonitor size={16} />,
  };

  return (
    <button
      onClick={cycle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-ledger text-fog transition-colors hover:text-paper"
    >
      {icons[mode]}
    </button>
  );
}