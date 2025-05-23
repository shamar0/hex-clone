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
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 10px;
  }
`;

export const ModalContent = styled(Box)`
  width: 90vw;
  max-width: 1000px;
  border-radius: 0px;
  outline: none;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
`;

export const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
`;
export const IconButton = styled.button`
  cursor: pointer;
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 11px;
  align-self: flex-end;
  border: 1px solid rgba(245, 192, 192, 0.35);
  svg {
    fill: #fff;
    height: 40px;
    width: 40px;
  }
  @media (max-width: 768px) {
    height: 34px;
    width: 34px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
