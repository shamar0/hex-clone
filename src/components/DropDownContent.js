import { Dropdown, DropdownItem } from "@/style/NavbarStyle";
import { Grid, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#000",
  // border: "1px solid rgb(227, 178, 179)",
  textAlign: "left",
  borderRadius: "0px",
  color: "#fff",
}));

export default function DropdownContent({ items }) {
  return (
    <Dropdown itemCount={items.length}>
      {items?.map((item, idx) => (
        <DropdownItem key={idx}>
          {item?.heading}
          <br />
          <span>{item?.content}</span>
        </DropdownItem>
      ))}
    </Dropdown>

    //   <Dropdown itemCount={items.length}>
    //  <Grid container spacing={0}>
    //   {items?.map((item, idx) => (
    //    <Grid
    //    size={{ xs: 12, md: 6 }} key={idx}>
    //       <Item sx={{ width: '100%', textAlign: 'center' }}>
    //          {item?.heading}
    //           <br />
    //        <span>{item?.content}</span>
    //         </Item>
    //    </Grid>
    //   ))}
    //  </Grid>
    //  </Dropdown>
  );
}
