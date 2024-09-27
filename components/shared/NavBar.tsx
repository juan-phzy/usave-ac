"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  return (
    <section className="nav-container">
      <div className="nav-content">
        <div className="nav-side-one">
          <span className="top-text">U-Save A/C</span>
          <span className="middle-text">
            <span className="text-red-500">& </span>Refrigeration
          </span>
          <span className="bottom-text">
            Serving NJ and NY for over 30 years.
          </span>
          <div className="nav-logo">
            <Image
              className="object-contain"
              src="/images/eagle-logo.png"
              alt="logo"
              fill
            />
          </div>
        </div>
        <div className="nav-side-two">
          <div className="nav-number">{`Call Now: (973)-417-6092`}</div>
          <div className="nav-btns-container">
            {NAV_LINKS.map((linkObj, index) => {
              return (
                <Link
                  key={linkObj.label}
                  href={`${linkObj.path}`}
                  className={`nav-btn ${path == linkObj.path ? "active" : ""}`}
                >
                  {linkObj.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
