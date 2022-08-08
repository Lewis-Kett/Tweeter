import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { SearchInput } from "../SearchInput";

export const Widgets = () => {
  return (
    <div className="mt-2 px-2">
      <SearchInput />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 1000 }}
      />
    </div>
  );
};
