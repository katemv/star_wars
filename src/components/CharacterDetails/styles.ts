import styled from 'styled-components';

export const Container = styled.div`
    color: ${({theme}) => theme.colors.textContrast};
`;

export const Label = styled.h3`
  color: ${({theme}) => theme.colors.textContrast};
`;

export const Value = styled.p`
  color: ${({theme}) => theme.colors.textContrast};
`;

export const BackButton = styled.button`
  color: ${({theme}) => theme.colors.textContrast};
  background: transparent;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: 10px 0 5px;
  outline: none;
  
  &:hover {
    color: ${({theme}) => theme.colors.accent};
  }
`;
