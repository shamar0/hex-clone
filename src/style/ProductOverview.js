'use client';
import styled, { keyframes } from 'styled-components';


export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 170px 80px 0px;
    width: 85%;
    margin: 0px auto;
    border-left: 1px solid rgba(227, 178, 179, 0.35);
    border-right: 1px solid rgba(227, 178, 179, 0.35);
    max-width: 85%;
    @media (max-width:768px) {
      padding: 50px 10px;
      width: 94%;
      max-width: 94%;
    }
`;

export const WorflowHeadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-top: 1px dashed rgba(245, 192, 192, 0.4);
    border-bottom: 1px dashed rgba(245, 192, 192, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 50px;
    @media (max-width:768px) {
     text-align: center;
     h1 {
      padding: 28px 0;
     }
    }
`;

export const InnerHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    margin-top: 100px;
    padding-top: 80px;
    @media (min-width: 1024px){
      min-width: 1024px;
    }
    @media (max-width: 768px) {
      padding-top: 68px;
      width: 100%;
    }
`;

export const FirstInner = styled.div`
   display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
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
    &.product-section {
    position: absolute;
    bottom: 153px;
    right: 110px;
    max-width: 310px;
    }   
    @media (max-width:768px) {
     h1 {
      font-size: 30px;
     }
      margin-top: 140px;
     &.mob-first-left, &.cohort {
      margin-top: 50px;
     }
    }
 `;

  export const FirstRight = styled.div`
    height: 300px;
    overflow: hidden;
    padding: 0px 20px;
    border-top: 1px solid rgba(245, 192, 192, 0.3);
    border-bottom: 1px solid rgba(245, 192, 192, 0.3);

     display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
   height: 180px;
   width: 90%;
  }
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

  @media (max-width : 768px) { 
     width: 302px !important;
    }
`;

export const OuterDivSection = styled.div`
    display: flex;
    position: relative;
    padding: 100px 80px 0;
    width: 85%;
    margin: 0px auto;
    border-left: 1px solid rgba(227, 178, 179, 0.35);
    border-right: 1px solid rgba(227, 178, 179, 0.35);
    max-width: 85%;
    &.mob-section {
     flex-direction: column-reverse;
    }
    &.cohort-section {
      gap: 12px;
      padding: 100px 80px 170px;
      @media (min-width: 1024px){
       & > div:first-of-type {
       max-width: 1024px;
       display: flex;
       gap:20px;
       margin: 0 auto;
      }
      }
    }
    @media (max-width : 768px) { 
       width: 94%;
      max-width: 94%;
       padding: 18px 10px;
       &.cohort-section {
        flex-direction: column;
        padding: 18px 10px 100px;
        gap:12px;
       & > div:first-of-type {
         gap: 30px;
    display: flex;
    flex-direction: column;
        }
       }
    }
`;

export const ImageDiv = styled.div`
   margin: 0 auto;
   max-width: 1024px;
   img {
    width: 100%;
   }
   &.cohort-img {
    max-width: 750px;
   }
   @media (max-width : 768px) {
     img {
      width: 100%;
     }
   }
`;

const moveImage = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, 20px); /* move left-down */
  }
  100% {
    transform: translate(0, 0); /* move back right-up */
  }
`;

export const MovableImg = styled.img`
    height: 300px;
    width: 300px;
    object-fit: contain;
    bottom: 0;
    left: 33%;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 58%;
    animation: ${moveImage} 5s ease-in-out infinite;
    @media (max-width: 768px) {
      width: 150px;
      left: 1%;
      top: 64%;
    }
`;

      

