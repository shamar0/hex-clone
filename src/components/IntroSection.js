import {
  ActionDiv,
  Anchor,
  HeadingDiv,
  IntroContainer,
  MainHeading,
  RightHeadingDiv,
} from "@/style/NavbarStyle";
import React from "react";
import { Barlow_Semi_Condensed } from "next/font/google";
import VideoPopup from "./VideoPopup";

export default function IntroSection() {
  return (
    <IntroContainer>
      <HeadingDiv>
        <div>
          <MainHeading>Bring everyone together with data</MainHeading>
        </div>
        <RightHeadingDiv>
          <p>
            Go end-to-end from quick queries to deep-dive analyses to beautiful
            interactive data apps – all in one collaborative, AI-powered
            workspace.
          </p>
          <ActionDiv>
            <Anchor href="/">
              <div>Get started for free</div>
            </Anchor>
            <Anchor href="/">
              <div>Request a demo</div>
            </Anchor>
          </ActionDiv>
        </RightHeadingDiv>
      </HeadingDiv>
      <VideoPopup />
    </IntroContainer>
  );
}
