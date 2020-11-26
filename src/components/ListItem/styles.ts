import styled from 'styled-components';

export const StyledListItem = styled.li`
  
  padding: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: .2s ease;
  position: relative;
  border: 1px solid #283e52;
  color: ${({theme}) => theme.colors.textContrast};
  background: ${({theme}) => theme.colors.primary};
 
  
  &: hover {
    border: 1px solid #c63843;
    color: ${({theme}) => theme.colors.accent};
  }
  
  &::marker {
    display: none;
    color: transparent;
  }
`;
