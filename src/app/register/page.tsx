"use client";
import "./register.css";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <div className="register">
      <form className="register-form">
        <h1>Register Form</h1>
        <input
          type="text"
          placeholder="Username e.g. johndoe"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email eg. john@email.com"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
