import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.carvana.blue.dark};
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  padding: 40px 0 15px;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  opacity: 0.95;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 975px;
  position: relative;
`;

export const Card = styled.div`
  background: ${props => props.theme.carvana.white.primary};
  border-radius: 3px;
  margin: 10px;
  margin-bottom: 15px;
  padding: 10px;
  min-width: 96px;
  min-height: 150px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  min-width: 115px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 975px;
  margin: 25px auto;
  padding: 0 25px;
`;

export const Button = styled.button`
  background: ${p => p.theme.carvana.blue.primary};
  color: white;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    background: ${p => p.theme.carvana.blue.hover};
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.8;
  }
`;
