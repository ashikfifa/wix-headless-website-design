import React from "react";
import Link from "next/link";
function MegaMenu() {
  return (
    <div className=" absolute w-full mt-11 bg-aliceblue shadow-lg border border-gray-200 p-6 grid grid-cols-3 gap-4">
      {/* Column 1 */}
      <div>
        <h3 className="font-bold text-black">Company</h3>
        <ul>
          <li>
            <Link href="/about/history">
              <span className="text-gray-700 hover:text-black">History</span>
            </Link>
          </li>
          <li>
            <Link href="/about/team">
              <span className="text-gray-700 hover:text-black">Our Team</span>
            </Link>
          </li>
          <li>
            <Link href="/about/careers">
              <span className="text-gray-700 hover:text-black">Careers</span>
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
              <span className="text-gray-700 hover:text-black">Consulting</span>
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
              <span className="text-gray-700 hover:text-black">Support</span>
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
  );
}

export default MegaMenu;
