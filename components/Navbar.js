import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" bg-gray-100 text-black shadow-sm">
      <div className="navbar w-[96%] mx-auto">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-2xl font-bold">
              LAWKIT
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between space-x-5">
          <div className="font-semibold text-lg">
            <Link href="/blogs">Blogs</Link>
          </div>
          <Link href="/login">
            <div className="font-semibold text-lg btn btn-primary rounded-sm text-white">
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
