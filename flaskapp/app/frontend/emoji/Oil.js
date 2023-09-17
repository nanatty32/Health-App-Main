import React from 'react';

export default function Oil(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#3e4347">
        <path d="m7.1 6.9h49.8v50.2h-49.8z" />
        <ellipse cx={32} cy="57.1" rx={26} ry="4.9" />
        <ellipse cx={32} cy="23.6" rx={26} ry="4.9" />
        <ellipse cx={32} cy="40.4" rx={26} ry="4.9" />
      </g>
      <g fill="#d0d0d0">
        <ellipse cx={32} cy="6.9" rx={26} ry="4.9" />
        <path d="m7.4 22.4c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-14.9 2.4-24.6 2.4s-18.4-1.4-24.6-2.4" />
        <path d="m7.4 39.3c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-14.9 2.4-24.6 2.4s-18.4-1.5-24.6-2.4" />
        <path d="m7.4 55.6c3.5 1.9 13.2 4.2 24.6 4.2s21.1-2.3 24.6-4.2c-6.2.9-15 2.4-24.6 2.4s-18.4-1.5-24.6-2.4" />
      </g>
      <ellipse cx="15.7" cy="6.9" rx="3.9" ry={1} fill="#3e4347" />
    </svg>
  );
}
