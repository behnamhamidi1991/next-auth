"use client";
import "./login.css";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  return (
    <div className="login">
      <form className="login-form">
        <h1>Login Form</h1>
        <input type="email" placeholder="Email eg. john@email.com" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Loign</button>
      </form>
    </div>
  );
}
