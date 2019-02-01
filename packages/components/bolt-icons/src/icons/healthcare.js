import { h } from '@bolt/core/renderers';

export const Healthcare = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 30 30">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M28 26a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2zM10 4h10V2H10zm16 0h-4V0H8v4H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"
        data-name="Fill-3"
      />
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M15 10a3 3 0 0 0-3 3v1h-1a3 3 0 0 0 0 6h1v1a3 3 0 0 0 6 0v-1h1a3 3 0 0 0 0-6h-1v-1a3 3 0 0 0-3-3m0 2a.94.94 0 0 1 1 1v2a.94.94 0 0 0 1 1h2a1 1 0 0 1 0 2h-2a.94.94 0 0 0-1 1v2a.94.94 0 0 1-1 1 .94.94 0 0 1-1-1v-2a.94.94 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a.94.94 0 0 0 1-1v-2a.94.94 0 0 1 1-1"
        data-name="Fill-1"
      />
    </svg>
  );
};
