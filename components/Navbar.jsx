"use client";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Navbar() {
  return (
    <nav className="w-full flex p-4 gap-6 justify-end fixed top-0 left-0 right-0 z-10">
      <Link
        className=" text-base-400 border-4 border-base-400 rounded-full p-2 "
        href="https://www.facebook.com/"
        target="_blank"
      >
        <FacebookOutlinedIcon className="text-3xl" />
      </Link>
      <Link
        className="text-base-500 border-4 border-base-500 rounded-full p-2"
        href="https://www.instagram.com/"
        target="_blank"
      >
        <InstagramIcon className="text-3xl" />
      </Link>
      <Link
        className="text-base-300 border-4 border-base-300 rounded-full p-2"
        href="https://www.youtube.com/"
        target="_blank"
      >
        <YouTubeIcon className="text-3xl" />
      </Link>
    </nav>
  );
}

export default Navbar;
