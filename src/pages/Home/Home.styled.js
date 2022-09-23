import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const Item = styled.li`
  display: flex;
  width: 185px;
  text-align: center;
  border: 1px solid #fd5103;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const ItemLink = styled(Link)`
  color: #fd5103;
  font-size: 18px;
  width: 100%;
  height: 100%;
  transition: text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding: 6px;
  flex-grow: 1;
`;
