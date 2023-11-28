import React from "react";
import { useLocation } from "react";
import { IconContext, House, Bell, MagnifyingGlass  } from "@phosphor-icons/react";


function Header() {
 if (window.location.pathname === "/feed") {
    return (
      <header className="fixed sticky top-0 w-full bg-bkg-1 flex justify-around items-center p-2">
        <IconContext.Provider
          value={{
            color: "silver",
            size: 32,
            weight: "bold",
            mirrored: false,
          }}
        >
          <a href="/explore">
            <MagnifyingGlass />
          </a>
          <h1 className="text-content font-bold items-center flex"> Present  </h1>
          <a href="/notifications">
            <Bell />
          </a>
        </IconContext.Provider>
      </header>
    );
  }
    
  return (
    <header className="fixed sticky top-0 w-full bg-bkg-1 flex justify-around items-center p-2">
      <IconContext.Provider
        value={{
          color: "silver",
          size: 32,
          weight: "bold",
          mirrored: false,
        }}
      >
        <a href="/feed">
          <House />
        </a>
        <h3 className="text-content font-bold items-center flex"> Present  </h3>
        <a href="/notifications">
          <Bell />
        </a>
      </IconContext.Provider>
    </header>
  );
}

export default Header;
