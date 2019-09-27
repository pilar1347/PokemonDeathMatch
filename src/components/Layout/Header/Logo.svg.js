import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LogoSvgWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

const LogoSvg = ({ className }) => (
  <LogoSvgWrapper
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 153 35"
  >
    <title>Carvana</title>
    <g>
      <path
        d="M95.82,20.11l-3.94-10H88.47l.19.46,5.83,14.13h2.58l6-14.59H99.74l-3.92,10M131.28,19l-6.89-8.91h-2.75V24.56h3.08V15.37l7.11,9.19h2.53V10.07h-3.08ZM109.6,10l-6.37,14.59h3.18l2.64-6.15h0L110.91,14v0l0-.07,1.71,4.11-1.17,2.68h2.29l.81,1.94.77,1.84h3.3L112.29,10Zm37,0h-2.7l-6.37,14.59h3.18l2.64-6.15h0l1.85-4.33h0l.05-.1,1.71,4.1-1.17,2.7h2.3l.81,1.94.77,1.84H153Z"
        fill="#fff"
      />
      <path
        d="M52.78,21.4a8,8,0,0,1-2,1.52,5.53,5.53,0,0,1-2.64.6A5.44,5.44,0,0,1,45.82,23,5.58,5.58,0,0,1,44,21.71a6.13,6.13,0,0,1-1.23-2,6.61,6.61,0,0,1-.44-2.41v0a6.6,6.6,0,0,1,.44-2.4,6.18,6.18,0,0,1,1.22-2,5.61,5.61,0,0,1,1.83-1.32,5.45,5.45,0,0,1,2.3-.49,6.74,6.74,0,0,1,1.49.16,6,6,0,0,1,1.22.43,5.16,5.16,0,0,1,1,.63,11.09,11.09,0,0,1,.89.76l.25.23.94-1-.25-.23c-.35-.32-.71-.62-1.07-.89a6.9,6.9,0,0,0-1.21-.72A6.77,6.77,0,0,0,49.91,10a8.31,8.31,0,0,0-1.8-.18,6.73,6.73,0,0,0-2.88.61A6.93,6.93,0,0,0,43,12.06a7.29,7.29,0,0,0-1.48,2.38A7.86,7.86,0,0,0,41,17.31v0a8,8,0,0,0,.53,2.9A7.1,7.1,0,0,0,43,22.61a7.26,7.26,0,0,0,2.25,1.6,6.94,6.94,0,0,0,2.84.59,7.61,7.61,0,0,0,1.77-.2,8,8,0,0,0,1.52-.52,7.53,7.53,0,0,0,1.29-.79,11.16,11.16,0,0,0,1.09-1l.24-.24L53,21.17l-.24.23M63.47,10,56.6,24.56H58L64,11.88,67.37,19l-.85,1.81h1.71L70,24.56h1.36L64.52,10h-1M81.83,18.5a6.09,6.09,0,0,0,1.24-.32,4.83,4.83,0,0,0,1.49-.85,3.7,3.7,0,0,0,1-1.3,4.1,4.1,0,0,0,.35-1.7v0a4.19,4.19,0,0,0-.29-1.55,4,4,0,0,0-.81-1.25A4.76,4.76,0,0,0,83,10.43a7.57,7.57,0,0,0-2.43-.36h-6V24.56H75.9v-5.9h4.39l4.5,5.9h1.7L81.83,18.5M75.9,17.38v-6h4.66a4.79,4.79,0,0,1,3,.81,2.57,2.57,0,0,1,1,2.17v0a2.78,2.78,0,0,1-.26,1.2,2.68,2.68,0,0,1-.78.94,3.88,3.88,0,0,1-1.29.63,6.38,6.38,0,0,1-1.8.24H75.9"
        fill="#fff"
      />
      <path
        d="M34.63,17.32A17.32,17.32,0,1,1,17.31,0,17.31,17.31,0,0,1,34.63,17.32Z"
        fill="#00acd8"
      />
      <path
        d="M17.4,8.84a19.38,19.38,0,0,0-2.88.2,4.5,4.5,0,0,0-1.29.35l.08,0a4.34,4.34,0,0,0,.91.26,18.19,18.19,0,0,0,3.18.25,18.07,18.07,0,0,0,2.87-.2,4.69,4.69,0,0,0,1.29-.34l-.08,0a4.4,4.4,0,0,0-.9-.26,18.37,18.37,0,0,0-3.18-.25m0,1.76a19.32,19.32,0,0,1-3-.21,3.79,3.79,0,0,1-1.76-.58.67.67,0,0,1-.2-.42.64.64,0,0,1,.2-.42A1.38,1.38,0,0,1,13,8.74a5.07,5.07,0,0,1,1.06-.3,18,18,0,0,1,3.31-.26,19.4,19.4,0,0,1,3,.2A3.58,3.58,0,0,1,22.11,9a.57.57,0,0,1,.21.42.59.59,0,0,1-.21.42,1.38,1.38,0,0,1-.35.22,4.85,4.85,0,0,1-1.06.31,18.85,18.85,0,0,1-3.3.26"
        fill="#fbb649"
      />
      <path
        d="M24.92,17.66a12.2,12.2,0,0,1-1-1.49l.08,0s1.85-.1,1.52-.74c0,0-.36-.77-1.72-.77h-.19c-.06,0-.15,0-.18.5a6.48,6.48,0,0,0-1.91-2.53,1.94,1.94,0,0,0-.64-.22c-.39-.07-3.34-.1-3.58-.1h0c-.24,0-3.19,0-3.58.1a1.85,1.85,0,0,0-.64.22,6.48,6.48,0,0,0-1.91,2.53c0-.47-.12-.5-.19-.5h-.18c-1.36,0-1.72.77-1.72.77-.33.64,1.52.74,1.52.74l.08,0a12.2,12.2,0,0,1-1,1.49,4.22,4.22,0,0,0-.53.77,2.41,2.41,0,0,0-.14.88c0,.49.07,2.63.07,2.63v2.69a.25.25,0,0,0,.22.28h2.13a.25.25,0,0,0,.23-.28V24.3H22.94v.33a.25.25,0,0,0,.23.28h2.12a.25.25,0,0,0,.23-.28V21.94s.05-2.14.07-2.63a2.11,2.11,0,0,0-.15-.88A3.82,3.82,0,0,0,24.92,17.66ZM12,15.6A14.73,14.73,0,0,1,13.42,13s1.21-.06,2.82-.07l0,.12v.28a.19.19,0,0,0,.19.19h1.87a.19.19,0,0,0,.2-.19v-.28l-.05-.12c1.61,0,2.81.07,2.81.07a15,15,0,0,1,1.47,2.59c.11.3-.14.3-.14.3H12.09S11.84,15.9,12,15.6ZM10,20c-.41-.1-.45-.35-.45-.35a2.32,2.32,0,0,1,.13-1.07.67.67,0,0,1,.74-.39,4.71,4.71,0,0,1,1.21.58c.7.36.79,1.59.79,1.59A20.78,20.78,0,0,1,10,20Zm11.47.43c-1.25.1-3.05.11-4.14.11s-2.89,0-4.14-.11c0,0-.35-.76.19-.78.07,0,1.68-.06,4-.06s3.88.06,3.95.06C21.81,19.71,21.46,20.47,21.46,20.47Zm3.64-.78s-.05.25-.45.35a21,21,0,0,1-2.43.36s.1-1.23.79-1.59a4.88,4.88,0,0,1,1.21-.58.69.69,0,0,1,.75.39A2.49,2.49,0,0,1,25.1,19.69Z"
        fill="#fff"
      />
    </g>
  </LogoSvgWrapper>
);

LogoSvg.propTypes = {
  className: PropTypes.string
};

LogoSvg.defaultProps = {
  className: ""
};

export default LogoSvg;
