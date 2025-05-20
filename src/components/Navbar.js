'use client';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Product from '../../public/Icons/Product';
import Arrow from '../../public/Icons/Arrow';
import { ArrowIconWrapper, CenterElement, Dropdown, DropdownWrapper, StyledButton } from '@/style/NavbarStyle';
import UseCases from '../../public/Icons/UseCases';
import Enterprise from '../../public/Icons/Enterprise';
import Resources from '../../public/Icons/Resources';
import Pricing from '../../public/Icons/Pricing';
import Hex from '../../public/Icons/Hex';
import DropdownContent from './DropDownContent';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState("product"); 
  const productItems = [
    {
    title: "dfn",
    content:"nbfmnf",
    },
    {
    title: "abc",
    content:"mndb",
    },
     {
    title: "dfn",
    content:"nbfmnf",
    },
    {
    title: "abc",
    content:"mndb",
    },
     {
    title: "dfn",
    content:"nbfmnf",
    },
    {
    title: "abc",
    content:"mndb",
    }
  ];

  const useCasesItems = [
    {
    title: "dfn",
    content:"nbfmnf",
    },
    {
    title: "abc",
    content:"mndb",
    },
     {
    title: "dfn",
    content:"nbfmnf",
    }
  ];


  return (
    <>
        <CenterElement>
          <DropdownWrapper
          onMouseEnter={() => setOpenDropdown("product")} 
          // onMouseLeave={() => setOpenDropdown(null)}
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
          <StyledButton>
            <Resources />
            Resources
            <Arrow />
            </StyledButton>
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
    </>
  );
}
