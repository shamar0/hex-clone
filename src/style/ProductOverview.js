'use client';
import styled, { keyframes } from 'styled-components';


export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 100px 0px;
    @media (max-width:768px) {
      padding: 80px 0px;
    }
`;

export const WorflowHeadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-top: 1px dashed rgba(245, 192, 192, 0.4);
    border-bottom: 1px dashed rgba(245, 192, 192, 0.4);
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
    padding-top: 80px;
    @media (min-width: 1024px){
      min-width: 1024px;
    }
    @media (max-width: 768px) {
      padding-top: 68px;
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
    bottom: 63px;
    right: -50px;
    max-width: 310px;
    }   
    @media (max-width:768px) {
     h1 {
      font-size: 30px;
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
    padding: 18px 32px;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    &.mob-section {
     flex-direction: column-reverse;
    }
    &.cohort-section {
      gap: 12px;
      padding: 80px 32px;
    }
    @media (max-width : 768px) { 
       padding: 18px 10px;
       &.cohort-section {
        flex-direction: column;
        padding: 80px 0px;
       }
    }
`;

export const ImageDiv = styled.div`
   margin: 0 auto;
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
    left: 25%;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 60%;
    animation: ${moveImage} 5s ease-in-out infinite;
    @media (max-width: 768px) {
      width: 150px;
      left: -1%;
      top: 67%;
    }
`;

      

