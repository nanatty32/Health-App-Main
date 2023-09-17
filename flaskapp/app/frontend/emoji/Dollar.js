import React from 'react';

export default function Dollar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#699635" d="m0 46.5h64v9h-64z" />
      <path fill="#83bf4f" d="m0 8.5h64v38h-64z" />
      <path fill="#94989b" d="m24 46.5h16v9h-16z" />
      <path fill="#699635" d="m4 12.5h56v30h-56z" />
      <path fill="#83bf4f" d="m7 15.5h50v24h-50z" />
      <circle cx={45} cy="27.5" r={8} fill="#699635" />
      <path fill="#d0d0d0" d="m24 8.5h16v38h-16z" />
      <path d="m16 26.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2h2c0-1.9-1.3-3.4-3-3.9v-1.1h-2v1.1c-1.7.4-3 2-3 3.9 0 2.2 1.8 4 4 4 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2h-2c0 1.9 1.3 3.4 3 3.9v1.1h2v-1.1c1.7-.4 3-2 3-3.9 0-2.2-1.8-4-4-4" fill="#fff" />
    </svg>
  );
}
