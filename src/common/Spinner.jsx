import styled, { keyframes } from "styled-components";

const Overlay = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100vw;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const Spinner = () => (
  <Overlay>
    <Loader></Loader>
  </Overlay>
);

export default Spinner;
