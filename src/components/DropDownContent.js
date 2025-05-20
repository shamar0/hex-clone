import { Dropdown, DropdownItem } from "@/style/NavbarStyle";
import React from "react";

export default function DropdownContent({items}) {
  return (
     <Dropdown itemCount={items.length}>
      {items?.map((item, idx) => (
        <DropdownItem key={idx}>
          {item?.title}
          <br />
          <span>{item?.content}</span>
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
