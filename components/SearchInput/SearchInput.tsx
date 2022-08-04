import React, { SVGProps } from "react";
import { SearchIcon } from "@heroicons/react/outline";

export const SearchInput = ({}) => {
  return (
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" data-testid="searchIcon"/>
        <input
          type="text"
          placeholder="Search Tweeter"
          className="flex-1 bg-transparent outline-none "
        />
      </div>
  );
};
