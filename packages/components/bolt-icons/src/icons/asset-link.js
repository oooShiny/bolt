import { h } from '@bolt/core/renderers';

export const AssetLink = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg {...otherProps} viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <path
          fill={bgColor}
          d="M22.734 3.2l-1.929-1.927C19.996.428 18.986 0 17.805 0c-1.174 0-2.178.393-2.999 1.18l-2.05 2.096c-.276.253-.419.535-.426.84-.007.31.131.61.41.889a1.2 1.2 0 0 0 1.714 0l2.07-2.07c.327-.327.781-.476 1.27-.467.537.012.96.179 1.292.512l1.947 1.947c.351.328.521.742.521 1.268 0 .533-.16.95-.489 1.28l-6.524 6.526c-.369.367-.848.565-1.468.603-.604.036-1.017-.098-1.319-.423l-.804-.804-.668-.668c-.28-.303-.575-.447-.902-.446a1.063 1.063 0 0 0-.795.406c-.3.254-.456.54-.463.852-.006.319.143.622.433.888l1.453 1.454.027.307h.342c.698.57 1.557.858 2.556.858.054 0 .108-.001.161-.003.94-.028 1.781-.294 2.506-.79l.09.089.34-.34c.028-.03.068-.076.118-.144l6.684-6.658C23.607 8.372 24 7.368 24 6.195c0-1.181-.429-2.19-1.266-2.994m-11.47 15.714c.313.308.45.604.45.915 0 .31-.137.607-.41.88l-2.056 2.054C8.424 23.59 7.432 24 6.285 24c-1.144 0-2.149-.408-2.988-1.213L1.22 20.71C.41 19.864 0 18.859 0 17.715c0-1.147.41-2.14 1.22-2.95l6.795-6.794a4.035 4.035 0 0 1 2.95-1.221c1.147 0 2.14.41 2.95 1.22l1.574 1.576c.271.227.427.514.433.825.006.319-.143.622-.447.902-.47.474-1.242.443-1.7-.013L12.2 9.685c-.662-.663-1.765-.658-2.484.012L2.934 16.48a1.775 1.775 0 0 0-.489 1.258c0 .487.16.883.49 1.213l2.114 2.115c.663.662 1.764.657 2.484-.012l2.054-2.1c.15-.15.413-.324.837-.324.322 0 .604.096.84.285"
          mask="url(#mask-2)"
        />
      </g>
    </svg>
  );
};
