"use client";

import { useBoardStore } from "@/store/BoardStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar from "react-avatar";

export default function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);
  return (
    <header className="flex items-center justify-between p-4">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-blue-600 rounded-md filter blur-3xl opacity-50 -z-50" />
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="Logo"
        width={100}
        height={100}
        className="w-44 pb-10 md:pb-0 object-contain"
      />
      <div className="flex items-center space-x-5 flex-1 justify-end w-full">
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="flex-1 p-2 rounded-md bg-white/50 outline-none"
          />
          <button type="submit" hidden>
            Search
          </button>
        </form>
        <Avatar name="Ambjörn Fagerström" size="50" round />
      </div>
    </header>
  );
}
