import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 42px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 8px;
  display: flex;
  width: 185px;
  flex-direction: column;
  text-align: center;
  border: 2px solid #fd5103;
  color: #000000;

  background-color: #fff;
`;

export const Title = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  padding: 6px;
  color: #fd5103;
`;
