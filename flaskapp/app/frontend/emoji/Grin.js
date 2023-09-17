import React from 'react';

export default function Grin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffdd67" />
      <g fill="#664e27">
        <path d="m28.5 27.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7 2.2 0 4.4.8 6.2 2.7.6.6 1.5-.4 1.3-.9" />
        <path d="m50.4 27.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.5.6 1.5-.4 1.3-.9" />
        <path d="m54 37.4c0-.8-.6-1.8-2.4-2.1-4.4-.6-11.1-1.3-19.6-1.3-8.5 0-15.2.7-19.6 1.3-1.7.3-2.4 1.3-2.4 2.1 0 9.6 3.5 12.6 17.8 12.6h8.4c14.3 0 17.8-3 17.8-12.6" />
      </g>
      <g fill="#fff">
        <path d="m48.9 38.2c.2-.5-.1-1-.5-1.1 0 0-7.4-1.1-16.4-1.1-9 0-16.4 1.1-16.4 1.1-.5.1-.7.6-.5 1.1l1.1 2.9c.2.5.8.9 1.3.9h29.1c.5 0 1.1-.4 1.3-.9l1-2.9" />
        <path d="m32 48c6.4 0 15.5 0 15.2-2.1 0-.4-.1-.8-.3-1.3-.2-.5-.3-.7-1.4-.7-2.4 0-25.3 0-27.1 0-1.1 0-1.2.1-1.4.7-.1.5-.2.9-.3 1.3-.2 2.1 8.9 2.1 15.3 2.1" />
      </g>
    </svg>
  );
}
