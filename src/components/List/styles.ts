import styled from 'styled-components';

interface ContainerProps {
  isDraggingOver: boolean;
}

export const Container = styled.div<ContainerProps>`
    border: 2px solid  ${({isDraggingOver}) => isDraggingOver ? '#ffeb3b' : 'transparent'};
    min-height: 640px;
    
    & li::marker {
      color: transparent;
    }
`;
