import React, { ReactElement } from "react";

interface Link {
  name: string;
  link: string;
}

const links: Link[] = [
  {
    name: "Home",
    link: "/"
  },
   {
    name: "About",
    link: "/About"
  },
  {
    name: "Login",
    link: "/Login"
  },
  {
    name: "Register",
    link: "/Register"
  },
  {
    name: "Logout",
    link: "/logout"
  },
  {
    name: "Upload",
    link: "/Upload"
  },
  {
    name: "Profile",
    link: "/Profile"
  }
];

/**
 * Renders the menu component.
 *
 * @returns {ReactElement} The rendered menu component.
 */
const Menu = (): ReactElement => (
  <div className="flex flex-col space-y-3">
    {links.map((l: Link, index: number): ReactElement => (
      <a key={"m"+index} href={l.link}>{l.name}</a>
    ))}
  </div>
);

export default Menu;