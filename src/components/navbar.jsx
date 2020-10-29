import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <div>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </div>
      </a>
    </nav>
  );
};

export default NavBar;
