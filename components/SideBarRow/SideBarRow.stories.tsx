import {HomeIcon } from "@heroicons/react/outline";
import { SideBarRow } from "./SideBarRow";

export default {
  title: "Components/SideBarRow",
  component: SideBarRow,
};

export const Primary = () => <SideBarRow Icon={HomeIcon} title="Home" />;
