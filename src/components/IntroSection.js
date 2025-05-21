import { ActionDiv, Anchor, HeadingDiv, IntroContainer, MainHeading, RightHeadingDiv } from "@/style/NavbarStyle";
import React from "react";
import { Barlow_Semi_Condensed } from 'next/font/google';
import VideoPopup from "./VideoPopup";


export default function IntroSection () {
    return (
       <IntroContainer>
         {/* text div */}
        <HeadingDiv> 
          <div>
            <MainHeading>Bring everyone together with data</MainHeading>
          </div>
          <RightHeadingDiv>
            <p>Go end-to-end from quick queries to deep-dive analyses to beautiful interactive data apps – all in one collaborative, AI-powered workspace.</p>
            <ActionDiv>
              <Anchor href="/">
              <div>
                 Get started for free
              </div>
              </Anchor>
              <Anchor href="/">
              <div>
                Request a demo
              </div>
              </Anchor>
            </ActionDiv> 
          </RightHeadingDiv>
        </HeadingDiv>
         
         {/* video div */}
        {/* <div id="video-container">
  <video autoPlay muted loop playsInline width="100%" height="auto">
    <source src="https://static.hex.site/hex-demo-2024-loop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}

      <VideoPopup />

       </IntroContainer>
    )
}