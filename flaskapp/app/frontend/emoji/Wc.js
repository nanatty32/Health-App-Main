import React from 'react';

export default function Wc(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#4fd1d9" />
      <g fill="#fff">
        <path d="M15.6,45L11,19h4l2.9,17.9L21.4,19H26l3.4,18.2L32.3,19h3.9l-4.7,26h-4.1l-3.8-19.4L19.8,45H15.6z" />
        <path d="m46 41.3c-1.9 0-3.5-1.7-3.5-3.7v-11.2c0-2 1.6-3.7 3.5-3.7 1.9 0 3.5 1.7 3.5 3.7h3.5c0-4.1-3.1-7.4-7-7.4-3.9 0-7 3.3-7 7.4v11.1c0 4.1 3.1 7.4 7 7.4 3.9 0 7-3.3 7-7.4h-3.5c0 2.1-1.6 3.8-3.5 3.8" />
      </g>
    </svg>
  );
}
