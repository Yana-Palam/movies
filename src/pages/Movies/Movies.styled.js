import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  position: relative;
  margin-bottom: 60px;
  justify-content: center;
  display: flex;
`;

export const Input = styled.input`
  height: 40px;
  width: 420px;
  outline: none;
  border: 2px solid #fd5103;
  border-radius: 4px;
  padding-left: 50px;
  background: transparent;
  background-color: #202025;
  color: #ffffff;
  font-size: 16px;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  padding: 10px;
  border: none;
  border-right: 2px solid #fd5103;
  cursor: pointer;
  background-color: transparent;
  left: 362px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  flex-grow: 1;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #5f6775;
`;
