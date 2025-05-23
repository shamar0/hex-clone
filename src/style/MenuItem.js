'use client';
import styled from 'styled-components';

export const MenuItem = styled.div`
    position: fixed;
    top: 73px;
    left: 0;
    background: #181820;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    height: calc(100vh - 75px);
`;

export const MenuItemUl = styled.ul`
      padding-inline: 0.6rem;
    padding-bottom: 4rem;
    border: 1px solid rgba(227, 178, 179, 0.35);
    border-top: none;
    padding: 20px 8px;
    width: 91%;
    margin: 0 auto;
    li {
     list-style: none;
    }
`;

export const TitleDiv = styled.div`
  padding-left: 0.4rem;
    margin-bottom: 0.25rem;
    font-family: "Cinetype Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: calc(0.625rem);
    font-weight: 400;
    color: rgb(153, 121, 125);
    letter-spacing: 0.02rem;
    text-transform: uppercase;
`;

export const MenuItemChildUl = styled.ul`
    border-bottom: 1px dashed rgb(49, 42, 49);
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    li {
      list-style: none;
    }
`;

export const StyledAnchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(0.875rem);
    line-height: 1.571;
    font-weight: 400;
    padding: 0.75rem 0.7rem 0.75rem 0.4rem;
    border-bottom: none;
    div {
     display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    }
`;


