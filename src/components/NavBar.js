import React from "react";

const links = ["home", "about", "contact"];

const NavBar = () => {
  return (
    <nav>
      {links.map((link, index) => (
        <a href={`#${link}`} key={index}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
