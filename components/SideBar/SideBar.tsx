import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from "@heroicons/react/outline";
import { SideBarRow } from "../SideBarRow";

export const SideBar = ({}) => {
  return (
    <div className="flex flex-col">
      <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="tweeter logo" />
      <SideBarRow Icon={HomeIcon} title="Home"/>
      <SideBarRow Icon={HashtagIcon} title="Explore"/>
      <SideBarRow Icon={BellIcon} title="Notifications"/>
      <SideBarRow Icon={MailIcon} title="Messages"/>
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks"/>
      <SideBarRow Icon={CollectionIcon} title="Lists"/>
      <SideBarRow Icon={UserIcon} title="Sign in"/>
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  );
};
