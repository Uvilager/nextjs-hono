import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex w-full justify-between  items-center py-4 border-b border-gray-600 px-4">
      <div className="">
        <Link href="/" className="text-xl font-bold">
          Home
        </Link>
      </div>
      <div>
        <Link href="/posts" className="text-xl font-bold">
          Posts
        </Link>
        <Link href="/users" className="text-xl font-bold">
          Users
        </Link>
      </div>
    </header>
  );
}
