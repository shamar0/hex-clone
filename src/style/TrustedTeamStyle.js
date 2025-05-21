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
&.middle-text div {
  border: none;
  border-left: 1px solid rgb(227, 178, 179);
font-size: 42px;
}
&.first-div  div{ 
  border-top: 1px solid rgb(227, 178, 179);
  align-content: end;
}
&.last-div div {
  align-content: start;
}
`;

export const StyledBox = styled(Box)`
   max-width: 900px;
   margin: 0 auto;
`;

