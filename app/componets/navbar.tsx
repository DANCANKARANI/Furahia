"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          FURAHIA ADVENTURES
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </li>
          {/*<li>
            <Link href="/explore" className="text-gray-300 hover:text-white transition">
              Explore
            </Link>
          </li>*/}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
