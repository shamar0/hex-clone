"use client";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  z-index: inherit;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const OverlayButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6) !important;
  color: white !important;
  padding: 12px 24px;
  font-size: 1rem;
  z-index: 2;
  border: 1px solid rgba(245, 192, 192, 0.25);
  @media (max-width: 768px){
    padding: 8px;
    font-size: 10px;
  }
`;

export const ModalContent = styled(Box)`
  position: relative;
  width: 90vw;
  max-width: 1000px;
  background: #000;
  border-radius: 0px;
  outline: none;
  padding: 16px;
`;

export const StyledDiv = styled.div`
    display=flex
    alignItems=center
    justifyContent=center
    height=100vh
    position=relative
`;
 