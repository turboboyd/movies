import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 16px 24px;
  font-size: 18px;
  font-style: normal;
  color: #f6f6f6;
  text-transform: uppercase;
  border-radius: 14px;
  border: 1px solid #f6f6f6;

  &:hover {
    border: 1px solid #cf0000;
  }

  &.active {
    background-color: #cf0000;
    border: none;
  }
`;
