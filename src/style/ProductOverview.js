'use client';
import styled, { keyframes } from 'styled-components';


export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 100px 0px;
`;

export const WorflowHeadingDiv = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 0px 30px;
    width: 100%;
    border-top: 1px dashed rgba(245, 192, 192, 0.15);
    border-bottom: 1px dashed rgba(245, 192, 192, 0.15);
`;

export const InnerHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    min-width: 1024px;
    margin: 0 auto;
`;

export const FirstInner = styled.div`
   display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding-top: 40px;
`;
 export const FirstLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 350px;
    h2 {
        margin: 0px 0 20px;
     color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: -0.025em;
    }
    p {
         margin: 0px 0px 25px;
    font-size: 20px;
    line-height: 30px;
    color: rgb(245, 192, 192);
    font-weight: 300;
    }
 `;

  export const FirstRight = styled.div`
    height: 220px;
    overflow: hidden;
    padding: 0px 20px;
    border-top: 1px solid rgba(245, 192, 192, 0.3);
    border-bottom: 1px solid rgba(245, 192, 192, 0.3);

     display: flex;
  flex-direction: column;
  align-items: center;
  `;

  const scrollUpDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-75%); /* 4 images = 25% each, scroll up 3 images */
  }
  100% {
    transform: translateY(0%);
  }
`;

  export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scrollUpDown} 20s ease-in-out infinite;
`;
export const Img = styled.img`
width: 600px !important;
    height: auto;
    margin-bottom: 50px;
  object-fit: contain;
  margin: 0 auto;
`;