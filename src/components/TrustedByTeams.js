'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StyledBox, StyledGrid } from '@/style/TrustedTeamStyle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000',
  border: "1px solid rgb(227, 178, 179)",
  textAlign: 'center',
  borderRadius: '0px',
  color:"#fff"
}));

const logos = [
  { alt: "reddit" },
  { alt: "notion" },
  { alt: "brex" },
  { alt: "anthropic" },
  { alt: "hinge" },
  { alt: "seat geek" },

  { alt: "babylist" },
  { alt: "clickup" },
  // Hole starts here — skip 2 logos
  { alt: "Trusted By" },
  { alt: "fivetran" },

  { alt: "loom" },
  { alt: "alltrails" },
  { alt: "modern treasury" },
  { alt: "leading data" },

  { alt: "ramp" },
  { alt: "recursion" },
  { alt: "sedgwick" },
  { alt: "appfolio" },

  { alt: "teams" },
  { alt: "chesapeake" },
  { alt: "safetyculture" },
  { alt: "on" },
  { alt: "doximity" },
  { alt: "purestorage" },
   { alt: "ramp" },
  { alt: "recursion" },
  { alt: "sedgwick" },
];

export default function FullWidthGrid() {
  return (
    <StyledBox>
      <Grid container spacing={0}>
      {logos.map((logos,idx) => (
        <StyledGrid className={`
    ${idx === 8 || idx === 13 || idx === 18 ? "middle-text" : ""}
    ${idx === 8 && "first-div"}
    ${idx === 18 && "last-div"}
  `}
        size={{ xs: 6, md: idx === 8 ||  idx === 13 ||  idx === 18 ? 4 :2 }} key={idx}>
          <Item sx={{ width: '100%', textAlign: 'center' }}>{logos.alt}</Item>
        </StyledGrid>
      ))}
      </Grid>
    </StyledBox>

  );
}
