import styled from 'styled-components';

export const Container = styled.div`
    color: ${({theme}) => theme.colors.textContrast};
    padding: 20px 0;
`;

export const FilterTitle = styled.h4`
    flex: 1;
    margin: 0;
`;

export const FiltersContainer = styled.div`
    flex: 3;
    display: flex;
    flex-wrap: wrap;
`;

export const FilterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

interface FilterItemProps {
  $isSelected: boolean;
}

export const FilterItem = styled.div<FilterItemProps>`
  padding: 10px;
  margin-bottom: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: .2s ease;
  border: 1px solid ${({$isSelected, theme}) => $isSelected ? theme.colors.accent : '#283e52'};
  font-size: 12px;
  
  &: hover {
    border: 1px solid ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.accent};
  }
`;
