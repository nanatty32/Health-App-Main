import React from 'react';

export default function Flag_fm(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#428bc1" />
      <g fill="#fff">
        <path d="m32.8 21.6l2.4 1.8-.9-2.9 2.4-1.9h-3l-.9-2.9-.9 2.9h-3l2.4 1.9-.9 2.9z" />
        <path d="m32.8 42.4l2.4-1.8-.9 2.9 2.4 1.9h-3l-.9 2.9-.9-2.9h-3l2.4-1.9-.9-2.9z" />
        <path d="m21.9 29.9l2.4-1.8-.9 3 2.4 1.8h-3l-.9 3-.9-3h-3l2.4-1.8-.9-3z" />
        <path d="m42.1 29.9l-2.4-1.8.9 3-2.4 1.8h3l.9 3 .9-3h3l-2.4-1.8.9-3z" />
      </g>
    </svg>
  );
}
