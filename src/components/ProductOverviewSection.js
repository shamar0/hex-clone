"use client";
import {
  FirstLeft,
  ImageDiv,
  MovableImg,
  OuterDivSection,
} from "@/style/ProductOverview";
import React from "react";
import Workspace from "../../public/Icons/Workspace";
import { ActionDiv, Anchor } from "@/style/NavbarStyle";
import { isMobile } from "react-device-detect";
import AppsReporting from "../../public/Icons/AppsReporting";
import Enterprise from "../../public/Icons/Enterprise";

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
          {/* <Workspace /> */}
          <Enterprise height={40} width={40}/>
          <h2>Teamwork, that works for team</h2>
          <p>
            Get feedback from peers, align with stakeholders, review diff views,
            endorse trusted data, and build from reusable components — all in
            the same place.
          </p>
          <ActionDiv>
            <Anchor href="/">
              <div>Explore collaboration</div>
            </Anchor>
          </ActionDiv>
        </FirstLeft>
      </OuterDivSection>

      <OuterDivSection className="cohort-section">
        <div>
          <FirstLeft className="cohort">
            <AppsReporting />
            <h2>Interactive apps and reporting</h2>
            <p>
              Publish your work into beautiful reports, data apps, and
              dashboards with a drag-and-drop UI builder.
            </p>
            <ActionDiv>
              <Anchor href="/">
                <div>Explore App Builder</div>
              </Anchor>
            </ActionDiv>
          </FirstLeft>

          <ImageDiv className="cohort-img">
            <img
              src="https://hex.tech/static/3f9e93abb186ce09caae25d305575421/4d118/actionable-apps-main%402x.avif"
              alt="img"
            ></img>
          </ImageDiv>
          <MovableImg
            src="https://hex.tech/static/5f291fc12b45d2abf6cbe0c1876f363a/b4457/actionable-apps-drag%402x.avif"
            alt="img"
          />
        </div>
      </OuterDivSection>
    </>
  );
}
