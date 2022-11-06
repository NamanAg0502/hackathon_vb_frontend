import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-gray-100 text-black shadow-sm">
      <div className="navbar w-[96%] mx-auto">
        <div className="flex-1">
          <Link href="/">
            <Typography variant="h2">LawKit</Typography>
          </Link>
        </div>
        <div className="flex gap-3 flex-row items-center justify-between space-x-5">
          <Link href="/dashboard">
            <Typography>Dashboard</Typography>
          </Link>
          <Link href="/blogs">
            <Typography>Blogs</Typography>
          </Link>
          <Button variant="gradient">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
