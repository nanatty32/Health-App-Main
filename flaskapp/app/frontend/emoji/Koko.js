import React from 'react';

export default function Koko(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M62,52c0,5.5-4.5,10-10,10H12C6.5,62,2,57.5,2,52V12C2,6.5,6.5,2,12,2h40c5.5,0,10,4.5,10,10V52z" fill="#4fd1d9" />
      <g fill="#fff">
        <path d="m14.1 47v-6.4h10.3v-17.4h-10.3v-6.2h15.9v30z" />
        <path d="m34.1 47v-6.4h10.3v-17.4h-10.3v-6.2h15.9v30z" />
      </g>
    </svg>
  );
}
