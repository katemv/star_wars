import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItemText = styled.span`
  color: #fff;
  font-weight: 500;
  z-index: 100;
  position: relative;
`;

export const ListItem = styled.li`
  
  padding: 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: .2s ease;
  position: relative;
  border: 1px solid #283e52;
  
  
  &::before {
    background: #0e1e2c;
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0.3;
  }
  
  &: hover {
    border: 1px solid #c63843;
    
    &::before {
      opacity: 0.8;
    }
    
    ${ListItemText} {
      color: #c63843;
    }
  }
`;
