import styled from 'styled-components';

export const Container = styled.button`
  background: transparent 0% 0% no-repeat padding-box;
  border: 2px solid #21eba7;
  border-radius: 12px;
  opacity: 1;
  color: #1ab883;
  font-family: 'Poppins';
  font-size: 20px;
  padding: 10px;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background: #21eba7;
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: 13px;
    padding: 8px;
  }
`;
