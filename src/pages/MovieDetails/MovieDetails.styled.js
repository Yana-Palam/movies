import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  gap: 6px;
  font-size: 22px;
  font-weight: 500;
  background-color: inherit;
  color: #5f6775;
  padding: 8px 14px;
  border: inherit;
  max-width: 190px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: #fd5103;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  line-height: 1.4;
  color: #ffffff;
`;

export const TitleMovie = styled.h2`
  font-size: 36px;
  color: #fd5103;
`;

export const TitleList = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
  color: #fd5103;
`;

export const List = styled.ul`
  /* margin-bottom: 30px; */
`;

export const Item = styled.li`
  font-size: 22px;
  padding: 8px;
`;

export const LinkInformation = styled(Link)`
  color: #5f6775;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fd5103;
  }
`;

export const Border = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fd5103;
`;
