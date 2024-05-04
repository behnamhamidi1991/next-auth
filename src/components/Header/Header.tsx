import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
