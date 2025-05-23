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
  &:hover {
    background-color: rgba(227, 178, 179,0.2);
   }

`;

export const CenterElement = styled.div`
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    gap: 16px;
    position: sticky !important;
    top: 0;
    background: #181820;
    z-index: 2;
    width: 85%;
    margin: 0px auto;
    border-left: 1px solid rgba(227, 178, 179, 0.35);
    border-right: 1px solid rgba(227, 178, 179, 0.35);
    max-width: 85%;
    padding: 0px 80px;
    border-top: 1px solid rgba(227, 178, 179, 0.35);
    
    &.scrolled {
     top: 10px;
     border-top: 1px solid rgba(227, 178, 179, 0.35);
     border-bottom: 1px solid rgb(227, 178, 179,0.35);
     box-shadow: 0 6px 6px -1px rgba(227, 178, 179, 0.25);
    }
    &.scrolled::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #181820;
  z-index: 999;
}

   @media (max-width: 1024px) {
     display: none;
    }
`;


export const Dropdown = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'itemCount',
})`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({ itemCount }) => (itemCount > 4 ? '480px' : '220px')};
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 14px;
  border-radius: 8px;
  columns: ${({ itemCount }) => (itemCount > 4 ? 2 : 1)};
  column-gap: 0;
  border: 0.5px solid rgba(227, 178, 179,0.5);
  border-top: 0.5px solid rgba(227, 178, 179,0.3);
  border-radius: 4px;
  // column-gap: 25px;
`;

export const DropdownItem = styled.div`
  break-inside: avoid;
  // margin-bottom: 14px;
  width: 90%;
  padding: 14px;
  &:hover {
    background-color: rgba(0, 0, 360,0.5);
     background-color: rgba(360, 360, 360,0.1);
   }
  span {
   color: rgb(227, 178, 179);
   font-size: 14px;
   font-family: cursive;
  }
`;


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
    // max-width: 1240px;
    // padding: 32px;
    gap: 56px;
    // margin: 0px auto;
    z-index: 1;
    position: relative;
    background-color: #181820;
    padding: 20px 80px 50px;
    width: 85%;
    margin: 0px auto;
    border-left: 1px solid rgba(227, 178, 179, 0.35);
    border-right: 1px solid rgba(227, 178, 179, 0.35);
    max-width: 85%;

    &:after {
     z-index: 0;
    pointer-events: none;
    content: "";
    display: block;
    position: absolute;
    inset: 0px 0px -20px;
    background-image: linear-gradient(rgba(245, 192, 192, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(245, 192, 192, 0.15) 1px, transparent 1px);
    background-size: 32px 32px;
    background-position: center top;
    mask: linear-gradient(transparent 0%, white 50%, white 85%, transparent 100%);
    }

    @media (max-width : 768px) { 
     gap: 56px;
     padding: 26px 10px 32px;
     width: 94%;
     max-width: 94%;
    }

`;

export const HeadingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 0px auto;
    max-width: 1024px; 
   @media (max-width : 768px) {
     flex-direction: column;
     gap: 26px;
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
     @media (max-width : 768px) {
       font-size: 50px;
      line-height: 1.1;
     }
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
     @media (max-width: 768px) {
      font-size: 20px;
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

    export const NavbarMob = styled.div`
    position: sticky !important;
    background: #181820;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 0 10px;
    margin: 0 auto;
    border-left: 1px solid rgba(227, 178, 179, 0.35);
    border-right: 1px solid rgba(227, 178, 179, 0.35);
    width: 94%;
    max-width: 94%;
    border-top: 1px solid rgba(227, 178, 179, 0.35);
    &.scrolled {
     top: 10px;
     border-top: 1px solid rgba(227, 178, 179, 0.35);
     border-bottom: 1px solid rgba(227, 178, 179, 0.35);
     box-shadow: 0 4px 6px -1px rgba(227, 178, 179, 0.25);
    }
    &.scrolled::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #181820;
  z-index: 999;
}

    `;

    export const HamburgerButton = styled(Button)`
    max-width: 40px;
    max-height: 40px;
    padding: 0;
    margin: 0;
    min-width: 40px;
    border: none;
    border-radius: 100%;
    `;
    
    
    
