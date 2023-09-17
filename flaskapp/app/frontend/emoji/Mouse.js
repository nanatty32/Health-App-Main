import React from 'react';

export default function Mouse(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <ellipse cx="48.4" cy="19.6" rx="13.6" ry="13.6" fill="#b5b5b5" />
      <ellipse cx="48.3" cy="21.3" rx="10.1" ry="10.1" fill="#ffc5d3" />
      <ellipse cx="15.6" cy="19.6" rx="13.6" ry="13.6" fill="#b5b5b5" />
      <ellipse cx="15.7" cy="21.3" rx="10.1" ry="10.1" fill="#ffc5d3" />
      <path d="m48.5 33.4c-2.2-5-7.5-16-16.5-16-9 0-14.3 11-16.5 16-1.1 2.6-2.1 5-2.5 8.7-.6 6.5 7 12 11.1 12 2 0 4.1 3.9 7.9 3.9 3.8 0 5.9-3.9 7.9-3.9 4.1 0 11.7-5.6 11.1-12-.4-3.7-1.4-6.2-2.5-8.7" fill="#c4c5c6" />
      <g fill="#ffc5d3">
        <ellipse cx="44.7" cy="47.8" rx="4.2" ry="2.9" />
        <ellipse cx="19.3" cy="47.8" rx="4.2" ry="2.9" />
      </g>
      <path d="m35.8 47.8c-.8-.8-3.1-.9-3.8-.9-.7 0-3 .1-3.8.9-.5.6-.1 2 1.3 3.2.9.8 1.8 1 2.5 1 .7 0 1.6-.2 2.5-1 1.4-1.2 1.8-2.6 1.3-3.2" fill="#3e4347" />
      <ellipse cx="23.1" cy="38.5" rx={6} ry="5.9" fill="#fff" />
      <ellipse cx="23.1" cy="38.5" rx="4.2" ry="4.1" fill="#3e4347" />
      <ellipse cx="40.9" cy="38.5" rx={6} ry="5.9" fill="#fff" />
      <g fill="#3e4347">
        <ellipse cx="40.9" cy="38.5" rx="4.2" ry="4.1" />
        <path d="m30.7 55.1c.1-.4.4-.7.7-.9.3-.2.6-.4.9-.6.3-.1.7-.2 1.1-.3.4 0 .8 0 1.1.3-.4 0-.6.2-.9.3l-.9.4c-.3.1-.6.3-.9.4-.4.1-.8.2-1.1.4" />
      </g>
    </svg>
  );
}
