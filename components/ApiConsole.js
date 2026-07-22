'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TABS = {
  home: {
    method: 'GET',
    path: '/home',
    code: '200 OK',
    body: {
      name: 'Laxman Nath',
      role: 'Fullstack Developer',
      focus: ['Java', 'Spring Boot', 'Node.js', 'React'],
      based_in: 'Kathmandu, Nepal',
    },
  },
  about: {
    method: 'GET',
    path: '/about',
    code: '200 OK',
    body: {
      summary: 'Backend-focused fullstack developer',
      experience: '2+ years',
      current: 'Fullstack Developer @ Inventechgroup',
    },
  },
  contact: {
    method: 'GET',
    path: '/contact',
    code: '200 OK',
    body: {
      email: 'nathlaxman242@gmail.com',
      phone: '+977-9805759293',
      github: 'github.com/Laxman-Nath',
      linkedin: 'linkedin.com/in/laxman-nath',
    },
  },
};

function JsonBody({ body }) {
  return (
    <pre className="overflow-x-auto text-sm leading-relaxed text-gray-300">
      {JSON.stringify(body, null, 2)}
    </pre>
  );
}

export default function ApiConsole() {
  const [active, setActive] = useState('home');
  const [copied, setCopied] = useState(false);
  const tab = TABS[active];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(tab.body, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#0f0f0f] shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-gray-800 bg-[#1a1a1a] px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-3 font-mono text-xs text-gray-400">laxman.dev — API Console</span>
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-lg bg-gray-800 px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy JSON'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 bg-[#1a1a1a] px-5">
        {Object.keys(TABS).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-6 py-3 font-mono text-sm transition-all ${
              active === key
                ? 'border-b-2 border-emerald-500 text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            /{key}
          </button>
        ))}
      </div>

      {/* Response Body */}
      <div className="bg-[#111111] p-6 font-mono text-sm">
        <div className="mb-4 flex items-center gap-3 text-emerald-400">
          <span className="font-bold">{tab.method}</span>
          <span className="text-gray-400">{tab.path}</span>
          <span className="ml-auto rounded bg-emerald-900/50 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            {tab.code}
          </span>
        </div>

        <JsonBody body={tab.body} />
      </div>
    </div>
  );
}