import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrp = styled.header`
  font-size: 34px;
  /* padding: 12px 0; */
  background-image: linear-gradient(to bottom, #fd5103, #202025);
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 16px 10px;
  text-decoration: none;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #fd5103;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5103;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
