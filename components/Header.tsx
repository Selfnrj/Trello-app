"use client";

import Avatar from "react-avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-blue-600 rounded-md filter blur-3xl opacity-50 -z-50" />
      <h5>Header</h5>
      <Avatar name="Ambjörn Fagerström" size="50" round />
    </header>
  );
}
