"use client";
import {
  Counter,
  FooterBottom,
  FooterCenter,
  FooterColTitle,
  FooterColumn,
  FooterDiv,
  FooterItem,
  FooterLinks,
  FooterRight,
  StyledGrid,
} from "@/style/Footer";
import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Hex from "../../public/Icons/Hex";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#181820",
  textAlign: "center",
  borderRadius: "0px",
  color: "#fff",
}));

export default function Footer() {
  const emojiOptions = ["🍷", "☕", "🍪", "🍩", "💜", "🍞", "🔒", "🍺", "🍰"];
  const [emoji, setEmoji] = useState(emojiOptions[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(emojiOptions[Math.floor(Math.random() * emojiOptions.length)]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const value = 7498912;
  const digits = value.toString().padStart(7, "0").split("");

  return (
    <FooterDiv>
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, md: 2 }}>
          <Item>
            <FooterItem>
              <Hex />
              <p> made with {emoji} on 🌍</p>
            </FooterItem>
          </Item>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Item>
            <FooterCenter>
              <FooterLinks>
                {/* 1st column */}
                <FooterColumn>
                  <FooterColTitle>COMPANY</FooterColTitle>
                  <a href="/">Careers</a>
                  <a href="/">Customers</a>
                  <a href="/">Media kit</a>
                  <a href="/">Newsroom</a>
                </FooterColumn>

                {/* 2nd column */}
                <FooterColumn>
                  <FooterColTitle>PRODUCT</FooterColTitle>
                  <a href="/">Notebooks</a>
                  <a href="/">Explore</a>
                  <a href="/">Hex Magic</a>
                  <a href="/">Enterprise</a>
                  <a href="/">For Teams</a>
                  <a href="/">App Builder</a>
                  <a href="/">Pricing</a>
                  <a href="/">Security</a>
                </FooterColumn>

                {/* 3rd column */}
                <FooterColumn>
                  <FooterColTitle>RESOURCES</FooterColTitle>
                  <a href="/">Blog</a>
                  <a href="/">Docs</a>
                  <a href="/">Quickstart</a>
                  <a href="/">Resources</a>
                  <a href="/">Templates</a>
                  <a href="/">Changelog</a>
                  <a href="/">Trust Center</a>
                </FooterColumn>

                {/* 4th column */}
                <FooterColumn>
                  <FooterColTitle>CONTACT</FooterColTitle>
                  <a href="/">Support</a>
                  <a href="/">Sales</a>
                  <a href="/">Twitter</a>
                  <a href="/">Email us</a>
                </FooterColumn>
              </FooterLinks>
              <FooterBottom>
                <div>
                  {" "}
                  &copy; {new Date().getFullYear()} Hex Technologies Inc.{" "}
                </div>
                <a href="/">Privacy policy</a>
                <a href="/">Terms & conditions</a>
                <a href="/">Modern slavery statement</a>
              </FooterBottom>
            </FooterCenter>
          </Item>
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <Item>
            <FooterRight>
              {digits.map((digit, index) => (
                <Counter key={index} className="digit">
                  {digit}
                </Counter>
              ))}
            </FooterRight>
          </Item>
        </Grid>
      </Grid>
    </FooterDiv>
  );
}
