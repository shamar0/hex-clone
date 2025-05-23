"use client";
import { useState, useRef } from "react";
import { Modal, Box, Button } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  IconButton,
  ModalContent,
  OverlayButton,
  StyledDiv,
  StyledVideo,
} from "@/style/VideoPopup";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleClose = () => {
    setOpen(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <>
      <Container>
        <StyledVideo autoPlay muted loop playsInline>
          <source
            src="https://static.hex.site/hex-demo-2024-loop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </StyledVideo>
        <OverlayButton onClick={handleOpen} variant="contained">
          Watch video (5 min)
        </OverlayButton>
      </Container>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <StyledDiv>
          <ModalContent>
            <StyledVideo ref={videoRef} controls autoPlay playsInline>
              <source
                src="https://static.hex.site/hex-demo-2024-loop.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </StyledVideo>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </ModalContent>
          
        </StyledDiv>
      </Modal>
    </>
  );
}
