import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-loader-spinner';

export const LoadingOverlay = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 250px;
`;

const Loader = () => (
  <LoadingOverlay>
    <Spinner type="Puff" color="#00aed9" width={100} height={100} />
  </LoadingOverlay>
);

export default Loader;
