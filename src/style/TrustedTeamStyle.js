'use client';
import styled, { css } from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const StyledGrid = styled(Grid)`
  background-color: #fff;
  height: 80px;
  div {
   height: 100%;
   align-content: center;
  }
   &.mob-text div{
    color: rgba(227, 178, 179,0.95);
    font-size: 30px;
    letter-spacing: 0.5px;
    font-weight: 800;
   }
&.middle-text div {
  border: none;
  border-left: 1px solid rgba(227, 178, 179,0.25);
  font-size: 42px;
  color: rgba(227, 178, 179,0.95);
}
&.first-div  div{ 
  border-top: 1px solid rgba(227, 178, 179,0.25);
  align-content: end;
}
&.last-div div {
  align-content: start;
}
`;

export const StyledBox = styled(Box)`
   max-width: 1024px;
   margin: 0 auto;
   padding-top: 32px;
   @media (max-width: 768px){
     & .desktop-grid {
       display: none;
     }
   }
   
`;

