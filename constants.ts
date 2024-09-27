interface NavLink {
    label: string;
    path: string;
  }

export const NAV_LINKS:NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
