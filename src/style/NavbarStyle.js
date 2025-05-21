'use client';
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

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    padding: 0px 32px;
    gap: 56px;
    margin: 0px auto;
    z-index: 1;
    position: relative;
`;

export const HeadingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 102px;
    margin: 0px auto;
    max-width: 880px;
    h1 {
    margin: 0px;
    font-family: "PP Formula SemiExtended", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 74px;
    line-height: 1.3;
    letter-spacing: -0.025em;
    background-color: rgb(255, 255, 255);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(55deg, rgb(255, 255, 255) 20%, rgba(245, 192, 192, 0.8) 100%);
   }
`;

export const MainHeading = styled.h1`
  margin: 0px;
    font-family: "PP Formula SemiExtended", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 74px;
    line-height: 1.3;
    letter-spacing: -0.025em;
    background-color: rgb(255, 255, 255);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(55deg, rgb(255, 255, 255) 20%, rgba(245, 192, 192, 0.8) 100%);
`;

    
    export const RightHeadingDiv = styled.div`
     display: flex;
     flex-direction: column;
     gap: 30px;
     p {
      margin: 0px;
      font-size: 24px;
      line-height: 34px;
      color: rgb(245, 192, 192);
      font-weight: 300;
     }
    `;

    export const ActionDiv = styled.div`
     display: flex;
     gap: 20px;
    `;

    export const Anchor = styled.a`
    position: relative;
    flex: 0 0 auto;
    display: flex;
    height: 48px;
    outline: none;
    padding: 0px 20px;
    user-select: none;
    cursor: pointer;
    font-size: 14px;
    color: rgb(245, 192, 192);
    min-width: 0px;
    transition: background-color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
    border: 1px solid transparent;
    background: linear-gradient(to right, rgb(20, 20, 28), rgb(20, 20, 28)) padding-box padding-box, linear-gradient(45deg, rgb(245, 192, 192), rgb(173, 142, 182)) border-box border-box;
    align-items: center;
    text-decoration: none;
    `;
    
    
