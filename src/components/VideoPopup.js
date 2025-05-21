"use client";
import { useState, useRef } from "react";
import { Modal, Box, Button } from "@mui/material";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


// Styled Components
const Container = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const OverlayButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6) !important;
  color: white !important;
  padding: 12px 24px;
  font-size: 1rem;
  z-index: 2;
`;

const ModalContent = styled(Box)`
  position: relative;
  width: 90vw;
  max-width: 1000px;
  background: #000;
  border-radius: 12px;
  outline: none;
  padding: 16px;
`;

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
        <StyledVideo  autoPlay muted loop playsInline>
         <source src="https://static.hex.site/hex-demo-2024-loop.mp4" type="video/mp4" />
               Your browser does not support the video tag.
        </StyledVideo>
        <OverlayButton onClick={handleOpen} variant="contained">
          Watch video (5 min)
        </OverlayButton>
      </Container>
{/* 
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <ModalContent>
            <StyledVideo
              ref={videoRef}
            //   src="/video.mp4"
              controls
              autoPlay
              playsInline
            >
                <source src="https://static.hex.site/hex-demo-2024-loop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
            </StyledVideo>
          </ModalContent>
        </Box>
      </Modal> */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    position="relative"
  >
    <ModalContent>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 10,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <StyledVideo ref={videoRef} controls autoPlay playsInline>
        <source
          src="https://static.hex.site/hex-demo-2024-loop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </StyledVideo>
    </ModalContent>
  </Box>
</Modal>

    </>
  );
}
