// import { Preact, h } from '@bolt/core';
const Launchpad = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...otherProps}>
      <title>launchpad</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M16.026 23.316a.884.884 0 0 0-.172.084 28.06 28.06 0 0 1-.973.452l-6.746-6.743c.097-.221.227-.505.386-.836a.989.989 0 0 0 .193-.394c1.117-2.243 3.443-6.246 7.38-10.182C20.88.917 27.63 2.012 29.547 2.452c.438 1.918 1.535 8.663-3.25 13.445-3.979 3.979-8.043 6.316-10.27 7.419zm3.055 3.997c-.742.74-1.738 1.316-2.675 1.744.73-1.584.922-3.129.954-4.167.842-.429 1.867-1 3.015-1.723.028 1.058-.108 2.96-1.294 4.146zM2.951 15.588c.427-.932 1.001-1.921 1.738-2.66 1.187-1.185 3.064-1.326 4.124-1.297a38.805 38.805 0 0 0-1.724 3.017c-1.124.032-2.619.237-4.139.94zM31.323 1.335c.12.384 2.855 9.511-3.612 15.975a42.264 42.264 0 0 1-5.476 4.613c.017.051.046.093.055.147.028.171.653 4.208-1.796 6.656-2.297 2.294-6.25 3.212-6.417 3.25a1 1 0 0 1-.929-1.682c1.41-1.408 1.933-3.117 2.12-4.433a7.806 7.806 0 0 1-.274.107.997.997 0 0 1-1.055-.23l-7.69-7.687a.997.997 0 0 1-.232-1.054c.01-.026.048-.124.103-.259-1.356.189-3.017.723-4.414 2.12a1.002 1.002 0 0 1-1.19.168 1 1 0 0 1-.492-1.097c.037-.167.955-4.118 3.25-6.414 2.45-2.447 6.488-1.824 6.66-1.796.045.007.081.034.124.047a42.397 42.397 0 0 1 4.621-5.482C21.148-2.18 30.28.557 30.666.676c.314.098.56.344.658.659zm-8.515 3.94a3.89 3.89 0 0 0-2.769 1.146 3.884 3.884 0 0 0-1.146 2.767c0 1.046.408 2.028 1.147 2.768a3.9 3.9 0 0 0 2.766 1.143 3.91 3.91 0 0 0 2.768-1.143 3.919 3.919 0 0 0 .001-5.533 3.881 3.881 0 0 0-2.767-1.147zm1.352 5.268a1.917 1.917 0 0 1-3.267-1.354c0-.512.2-.992.56-1.354.362-.362.843-.56 1.354-.56.512 0 .992.198 1.354.56.745.746.745 1.96 0 2.708zM4.727 22.486a3.381 3.381 0 0 1 4.776 0 3.383 3.383 0 0 1 0 4.776h-.001c-1.085 1.083-4.383 1.583-5.367 1.71a1 1 0 0 1-1.12-1.12c.127-.984.626-4.281 1.712-5.366zm3.36 3.363a1.376 1.376 0 1 0-1.948-1.95c-.3.3-.665 1.559-.921 2.87 1.309-.256 2.568-.621 2.87-.92z"
          id="id-14a"
        />
        <mask id="id-15b" fill="#fff">
          <use xlinkHref="#id-14a" />
        </mask>
        <g mask="url(#id-15b)" fill="currentColor" fill-rule="nonzero">
          <path d="M0 0h32v32H0z" />
        </g>
      </g>
    </svg>
  );
};
export default Launchpad;
