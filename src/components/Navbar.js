import React from "react";

function Navbar() {
  return (
    <nav class="navbar">
      <h1>Cedric</h1>
      <i class="hamburger fas fa-bars"></i>
      <ul class="bigNav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
