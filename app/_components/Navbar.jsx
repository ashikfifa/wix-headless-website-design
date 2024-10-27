"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-black text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="text-black hover:text-gray-700">Home</span>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className="text-black">About</button>
            {showMegaMenu && (
              <div className=" absolute w-[600px] bg-white shadow-lg border border-gray-200 p-6 grid grid-cols-3 gap-4">
                {/* Column 1 */}
                <div>
                  <h3 className="font-bold text-black">Company</h3>
                  <ul>
                    <li>
                      <Link href="/about/history">
                        <span className="text-gray-700 hover:text-black">
                          History
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/team">
                        <span className="text-gray-700 hover:text-black">
                          Our Team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/careers">
                        <span className="text-gray-700 hover:text-black">
                          Careers
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="font-bold text-black">Services</h3>
                  <ul>
                    <li>
                      <Link href="/about/consulting">
                        <span className="text-gray-700 hover:text-black">
                          Consulting
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/development">
                        <span className="text-gray-700 hover:text-black">
                          Development
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/support">
                        <span className="text-gray-700 hover:text-black">
                          Support
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="font-bold text-black">Resources</h3>
                  <ul>
                    <li>
                      <Link href="/about/blog">
                        <span className="text-gray-700 hover:text-black">Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/case-studies">
                        <span className="text-gray-700 hover:text-black">
                          Case Studies
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/white-papers">
                        <span className="text-gray-700 hover:text-black">
                          White Papers
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link href="/contact">
            <span className="text-black hover:text-gray-700">Contact</span>
          </Link>
        </div>

        {/* Right: Empty space for now */}
        <div className="hidden md:block w-12" />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link href="/">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              Contact
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
