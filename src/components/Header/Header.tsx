import Link from "next/link";
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/" className="link-item">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className="link-item">
            Login
          </Link>
        </li>
        <li>
          <Link href="/register" className="link-item">
            Register
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="link-item">
            Dashboard
          </Link>
        </li>
        <button className="logoutBtn">Logout</button>
      </ul>
    </header>
  );
};

export default Header;
