import React from 'react';

export default function Sweat(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M2,32c0,16.6,13.4,30,30,30s30-13.4,30-30S48.6,2,32,2S2,15.4,2,32z" fill="#ffdd67" />
      <path d="M48.5,16.3c0,9.9,13.5,9.9,13.5,0C62,9.1,55.3,2,55.3,2S48.5,9.1,48.5,16.3z" fill="#65b1ef" />
      <g fill="#664e27">
        <circle cx="43.5" cy={36} r={5} />
        <circle cx="20.5" cy={36} r={5} />
      </g>
      <g fill="#917524">
        <path d="m25.6 21.9c-3.2 2.7-7.5 3.9-11.7 3.1-.6-.1-1.1 2-.4 2.2 4.8.9 9.8-.5 13.5-3.6.5-.5-1-2.1-1.4-1.7" />
        <path d="m50.1 24.9c-4.2.7-8.5-.4-11.7-3.1-.4-.4-2 1.2-1.4 1.7 3.7 3.2 8.7 4.5 13.5 3.6.7-.2.2-2.3-.4-2.2" />
      </g>
      <path d="m40 52h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" fill="#664e27" />
    </svg>
  );
}