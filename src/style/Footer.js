'use client';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const FooterDiv = styled.footer`
    margin-bottom: 20px;
    padding: 50px 80px;
    margin: 0px auto;
    border: 1px solid rgba(227, 178, 179, 0.35);
    width: 85%;
    max-width: 85%;
     @media (max-width:768px) {
    & > div:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
      width: 94%;
      max-width: 94%;
      padding: 50px 10px;
   }
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    @media (max-width:768px) {
      align-items: center;
    }
`;

export const FooterCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;

export const FooterLinks = styled.div`
    display: flex;
    gap: 60px;
    width: 65%;

    @media (max-width:768px) {
     width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 1 0px;
    a {
     color: rgb(245, 192, 192);
    text-decoration: none;
    background-color: transparent;
    transition: background-color 0.1s linear;
     &:hover {
        text-decoration: underline;
     }
    }
`;

export const FooterColTitle = styled.div`
    font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    letter-spacing: 0.7px;
`;

export const FooterRight = styled.div`
  display: flex;
  background: transparent;
  border: 1px solid rgba(255, 192, 203, 0.3);
  padding: 5px;
  @media(max-width: 768px) {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const Counter = styled.div`
  font-family: monospace;
  color: #f8cbd1;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 192, 203, 0.2);
  padding: 8px 6px;
  margin: 1px;
  font-size: 1.5rem;
  width: 24px;
  text-align: center;
  `;

export const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    div, a {
     color: rgba(245, 192, 192, 0.6);
     text-decoration: none;
    }
    a{
     &:hover {
        text-decoration: underline;
     }
    }
    @media (max-width:768px) {
      flex-direction: column;
    }
`;





    