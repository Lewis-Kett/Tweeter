import React from "react";

interface SideBarRowProps {
  Icon?: () => {};
  title?: string;
}

export const SideBarRow = ({ Icon, title }: SideBarRowProps) => {
  return <h1 data-testid="test">Side bar row</h1>;
};
