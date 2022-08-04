import React, { SVGProps } from "react";

interface SideBarRowProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

export const SideBarRow = ({ Icon, title }: SideBarRowProps) => {
  return (
    <div
      className="group flex max-w-fit cursor-pointer 
    items-center space-x-2 rounded-full px-4 py-3 transition-all 
    duration-100 hover:bg-gray-100"
    >
      <Icon className="h-6 w-6" data-testid="rowIcon" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
};
