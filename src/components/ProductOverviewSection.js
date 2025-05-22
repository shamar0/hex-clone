'use client'
import { FirstLeft, ImageDiv, MovableImg, OuterDivSection } from "@/style/ProductOverview";
import React from "react";
import Workspace from "../../public/Icons/WorkSpace";
import { ActionDiv, Anchor } from "@/style/NavbarStyle";
import { isMobile } from 'react-device-detect';

export default function ProductOverviewSection() {
  return (
    <>
    <OuterDivSection className={isMobile && "mob-section"}>
      <ImageDiv>
        <img
          src="https://hex.tech/static/9b99e0dbb4f7331ba2d83cef71cc8838/60ca0/team-work%402x.avif"
          alt="img"
        ></img>
      </ImageDiv>
      <FirstLeft className={isMobile ? "mob-first-left" : "product-section"}>
        <Workspace />
        <h2>Teamwork, that works for team</h2>
        <p>
          Get feedback from peers, align with stakeholders, review diff views,
          endorse trusted data, and build from reusable components — all in the
          same place.
        </p>
        <ActionDiv>
          <Anchor href="/">
            <div>Explore collaboration</div>
          </Anchor>
        </ActionDiv>
      </FirstLeft>
    </OuterDivSection>

    <OuterDivSection className="cohort-section">
        <FirstLeft>
             <Workspace />
        <h2>Teamwork, that works for team</h2>
        <p>
          Get feedback from peers, align with stakeholders, review diff views,
          endorse trusted data, and build from reusable components — all in the
          same place.
        </p>
        <ActionDiv>
          <Anchor href="/">
            <div>Explore collaboration</div>
          </Anchor>
        </ActionDiv>
        </FirstLeft>

         <ImageDiv className="cohort-img">
        <img
          src="https://hex.tech/static/3f9e93abb186ce09caae25d305575421/4d118/actionable-apps-main%402x.avif"
          alt="img"
        ></img>
      </ImageDiv>
      <MovableImg src="https://hex.tech/static/5f291fc12b45d2abf6cbe0c1876f363a/b4457/actionable-apps-drag%402x.avif" alt="img" />
    </OuterDivSection>
    </>
  );
}
