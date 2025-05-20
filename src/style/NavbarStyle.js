import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;


export const StyledButton = styled(Button)`
  display: flex;
  gap: 8px;
  text-transform: none !important;
  cursor: default;
  color: #fff !important; 
  font-size: 14px;
  cursor: default !important;
  &.login-btn {
   color: rgb(227, 178, 179) !important; 
  }
`;

export const CenterElement = styled.div`
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    gap: 16px;
`;

// export const Dropdown = styled.div`
//   position: absolute;
//   top: 100%; /* positions it just below the button */
//   left: 0;
//   width: 300px;
//   height: 200px;
//   background-color: white;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   z-index: 1000;
//   padding: 16px;
//   border-radius: 8px;
// `;

// export const Dropdown = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 600px; /* Adjust width as needed */
//   background: white;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//   z-index: 1000;
//   padding: 24px;
//   border-radius: 12px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 24px; /* Space between items */
//   min-width: 220px;
//   max-width: 220px;
// `;

// export const Dropdown = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== 'itemCount',
// })`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: ${({ itemCount }) => (itemCount > 4 ? '440px' : '220px')};
//   background: #fff;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//   z-index: 1000;
//   padding: 16px;
//   border-radius: 8px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   gap: 16px;
// `;

export const Dropdown = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'itemCount',
})`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({ itemCount }) => (itemCount > 4 ? '440px' : '220px')};
  background-color: rgba(50, 49, 49, 0.6);
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 16px;
  border-radius: 8px;
  columns: ${({ itemCount }) => (itemCount > 4 ? 2 : 1)};
  column-gap: 0;
  border: 0.5px solid rgb(227, 178, 179);
  border-radius: 4px;
`;

export const DropdownItem = styled.div`
  break-inside: avoid;
  margin-bottom: 8px;
  width: 100%;
`;


// export const DropdownItem = styled.div`
//   min-width: 220px;
//   max-width: 220px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-bottom: 12px;
// `;


export const ArrowIconWrapper = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: flex;
  transition: transform 0.3s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
