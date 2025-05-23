'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Product from '../../public/Icons/Product';
import Arrow from '../../public/Icons/Arrow';
import { ArrowIconWrapper, CenterElement, Dropdown, DropdownWrapper, HamburgerButton, NavbarMob, StyledButton } from '@/style/NavbarStyle';
import UseCases from '../../public/Icons/UseCases';
import Enterprise from '../../public/Icons/Enterprise';
import Resources from '../../public/Icons/Resources';
import Pricing from '../../public/Icons/Pricing';
import Hex from '../../public/Icons/Hex';
import DropdownContent from './DropDownContent';
import Hamburger from '../../public/Icons/Hamburger';
import MenuItemsList from './MenuItemsList';
import CloseIcon from '../../public/Icons/CloseIcon';
import { isMobile } from 'react-device-detect';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState("product"); 
  const [menuItem, setMenuItem] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    {
      heading: "Notebooks",
      content: "Analyze, model, and explore, like never before"
    },
    {
      heading: "Explore",
      content: "Powerful exploration tools in a friendly, no-code UI"
    },
    {
      heading: "Magic AI",
      content: "Smarter, faster analysis"
    },
    {
      heading: "Embedded analytics",
      content: "Seamlessly embed data experiences for your customers"
    },
    {
      heading: "Collaboration and sharing",
      content: "Bring everyone together in one collaborative workspace"
    },
    {
      heading: "App Builder",
      content: "Build and share insights with beautiful visualizations"
    },
    {
      heading: "Integrations",
      content: "Connect to anything"
    }
  ];

  const useCasesItems = [
    {
heading: "Exploratory analysis",
content: "The most powerful tools for exploration available."
},
{
heading: "Data science",
content: "The first platform actually designed for data scientists."
},
{
heading: "Operational reporting",
content: "Interactive, intuitive reporting without crazy workarounds."
},
{
heading: "Self-serve",
content: "Data tools for stakeholders and decision-makers."
}
  ];

  const resourcesItems = [
    {
heading: "Templates",
content: "Jumpstart with pre-built"
},
{
heading: "Hex Foundations",
content: "Video series"
},
{
heading: "Docs",
content: "Resources and product guides"
},
{
heading: "Changelog",
content: "Product updates"
},
{
heading: "Blog",
content: "From data teams to data teams"
},
{
heading: "Resources & Events",
content: "Learn and connect with peers"
},
{
heading: "Customer stories",
content: "Empowering the best data teams"
},
{
heading: "Partners",
content: "Learn more about our partnerships"
}
  ];


  return (
    <>
        <CenterElement className={isScrolled && "scrolled"}>
          <DropdownWrapper
          onMouseEnter={() => setOpenDropdown("product")} 
          >
          <StyledButton
          onClick={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
          >
            <Product/>
            Product
            <ArrowIconWrapper isOpen={openDropdown === 'product'}>
            <Arrow />
          </ArrowIconWrapper>
          </StyledButton>
           {openDropdown === 'product' && <DropdownContent items={productItems}/>}
          </DropdownWrapper>

          <DropdownWrapper
          onMouseEnter={() => setOpenDropdown("use_cases")} 
          onMouseLeave={() => setOpenDropdown(null)}
          >
          <StyledButton 
          onClick={() => setOpenDropdown(openDropdown === 'use_cases' ? null : 'use_cases')}
          >
            <UseCases />
            Use Cases
            <ArrowIconWrapper isOpen={openDropdown === 'use_cases'}>
            <Arrow />
           </ArrowIconWrapper>
          </StyledButton>
          {openDropdown === 'use_cases' && <DropdownContent items={useCasesItems}/>}
          </DropdownWrapper>


          <StyledButton >
            <Enterprise />
            Enterprise
            </StyledButton>
            <StyledButton>
            <Hex />
            </StyledButton>
           
           <DropdownWrapper
          onMouseEnter={() => setOpenDropdown("resources")} 
          onMouseLeave={() => setOpenDropdown(null)}
          >
          <StyledButton>
            <Resources />
            Resources
            <Arrow />
            </StyledButton>
            {openDropdown === 'resources' && <DropdownContent items={resourcesItems}/>}
            </DropdownWrapper>
          <StyledButton color="inherit">
            <Pricing />
            Pricing</StyledButton>
          <StyledButton className='login-btn'>Log In</StyledButton>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', marginLeft: 1 }}
          >
            Get Started
          </Button>
        </CenterElement>

        {isMobile && (
          <NavbarMob className={ (isScrolled || menuItem) && "scrolled"}>
          <Hex />
          <HamburgerButton onClick={()=> setMenuItem(prev => !prev)}>
            {menuItem ? <CloseIcon /> :  <Hamburger />  }
          </HamburgerButton>
          </NavbarMob>
        )}
        {menuItem && <MenuItemsList/>}
    </>
  );
}
