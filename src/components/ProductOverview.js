"use client";

import {
  ActionDiv,
  Anchor,
  HeadingDiv,
  MainHeading,
} from "@/style/NavbarStyle";
import {
  FirstInner,
  FirstLeft,
  FirstRight,
  ImageWrapper,
  Img,
  InnerHeading,
  OuterDiv,
  WorflowHeadingDiv,
} from "@/style/ProductOverview";
import { Fira_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";
import Workspace from "../../public/Icons/Workspace";

export default function ProductOverview() {
  return (
    <OuterDiv>
      <WorflowHeadingDiv className="workspace">
        <MainHeading>
          {isMobile ? (
            <>
              <span> All your</span>
              <br />
              <span>workflows, in</span>
              <br />
              <span>one workspace</span>
            </>
          ) : (
            <>
              <span> All your workflows,</span>
              <br />
              <span>in one workspace</span>
            </>
          )}
        </MainHeading>
      </WorflowHeadingDiv>

      <InnerHeading>
        <FirstInner>
          <FirstLeft>
            <Workspace />
            <h2>Data exploration superpowers</h2>
            <p>
              SQL, Python, R, pivots, spreadsheets, charts, all together, all in
              a modular, notebook-based canvas.
            </p>
            <ActionDiv>
              <Anchor href="/">
                <div>Explore Notebooks</div>
              </Anchor>
              {/* <Anchor href="/">
                                <div>
                                  Request a demo
                                </div>
                                </Anchor> */}
            </ActionDiv>
          </FirstLeft>
          <FirstRight>
            <ImageWrapper>
              <Img
                src="https://hex.tech/static/edb9560556a5beac53bd0f7c2b1a3ffc/7a395/cell-pivot%402x.avif"
                alt="img"
              />
              <Img
                src="https://hex.tech/static/8debffad015d295a002ea370265c986f/df55f/cell-sql%402x.avif"
                alt="img"
              />
              <Img
                src="https://hex.tech/static/3bd1ec0824e940a0092557da452f3a63/c6f92/cell-chart-1%402x.avif"
                alt="img"
              />
              <Img
                src="https://hex.tech/static/dd57977f4cc071fbf0cec2b036b7ec0d/98f97/cell-chart-2%402x.avif"
                alt="img"
              />
            </ImageWrapper>
          </FirstRight>
        </FirstInner>
      </InnerHeading>
    </OuterDiv>
  );
}
