import React, { KeyboardEventHandler, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "@mui/material";

interface SearchSectionProps {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchSection = ({ setSearch }: SearchSectionProps) => {
  const onInputKeyDownCapture = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setSearch?.(event.currentTarget.value);
      }
    },
    [setSearch],
  );

  function handleSearchChange() {}

  return (
    <div>
      <div className={"rounded-3xl bg-gray-100 h-9 px-5"}>
        <div className={"flex h-full w-full items-center"}>
          <IoSearch />
          <input
            className={
              "bg-transparent h-full w-full outline-none md:p-5 text-md md:text-[0.825rem]"
            }
            placeholder={"Tìm món hoặc quán ăn"}
            onKeyDownCapture={onInputKeyDownCapture}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
