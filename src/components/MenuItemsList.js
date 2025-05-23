import {
  MenuItem,
  MenuItemChildUl,
  MenuItemUl,
  StyledAnchor,
  TitleDiv,
} from "@/style/MenuItem";
import React, { useEffect } from "react";
import Arrow from "../../public/Icons/Arrow";
import UseCases from "../../public/Icons/UseCases";

export default function MenuItemsList() {
    useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <MenuItem id="menu-item">
      <MenuItemUl>
        <li>
          <TitleDiv>Product</TitleDiv>
          <MenuItemChildUl>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Notebooks
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Explore
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Magic AI
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Embedded analytics
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Collaboration and sharing
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  App Builder
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Integrations
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
          </MenuItemChildUl>
        </li>

        {/* Use Cases */}
         <li>
          <TitleDiv>Use Cases</TitleDiv>
          <MenuItemChildUl>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Exploratory analysis
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Data science
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Operational reporting
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Self-serve
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
          </MenuItemChildUl>
        </li>

        {/* Resources */}
         <li>
          <TitleDiv>Resources</TitleDiv>
          <MenuItemChildUl>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Templates
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Hex Foundations
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>

            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Docs
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Changelog
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Blog
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Resources & Events
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
          </MenuItemChildUl>
        </li>
        <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Customer stories
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor>
                <div>
                  <UseCases />
                  Partners
                </div>
                <span>
                  <Arrow rotate={true} />
                </span>
              </StyledAnchor>
            </li>
      </MenuItemUl>
    </MenuItem>
  );
}
