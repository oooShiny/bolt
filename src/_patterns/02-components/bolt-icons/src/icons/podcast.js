// import { Preact, h } from '@bolt/core';
const Podcast = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <title>Icon/utility/Indigo/24px/Podcast</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path />
        <path
          d="M19.651 8.87c-.573 0-1.043.47-1.043 1.043V12a6.271 6.271 0 0 1-6.26 6.261c-3.45 0-6.26-2.81-6.26-6.26V9.912c0-.574-.47-1.044-1.044-1.044C4.47 8.87 4 9.34 4 9.913V12c0 4.252 3.188 7.767 7.304 8.283v1.631h-3.13c-.575 0-1.044.47-1.044 1.044C7.13 23.53 7.6 24 8.173 24h8.348c.574 0 1.043-.47 1.043-1.043 0-.574-.469-1.044-1.043-1.044h-3.13v-1.63c4.115-.517 7.304-4.032 7.304-8.284V9.913c0-.574-.47-1.044-1.044-1.044"
          fill="currentColor"
        />
        <path
          d="M10.26 4.174c0-1.147.94-2.087 2.088-2.087 1.147 0 2.087.94 2.087 2.087v7.825c0 1.149-.94 2.087-2.087 2.087a2.092 2.092 0 0 1-2.087-2.087V4.174zm2.088 11.999a4.178 4.178 0 0 0 4.174-4.174V4.174A4.178 4.178 0 0 0 12.348 0a4.178 4.178 0 0 0-4.174 4.174v7.825a4.178 4.178 0 0 0 4.174 4.174z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default Podcast;
