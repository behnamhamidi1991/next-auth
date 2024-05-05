"use client";
import "./register.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      console.log("Signup success", response.data);
      toast.success("User successfully created!");
      router.push("/login");
    } catch (error: any) {
      toast.error(error);
      console.log("Signup Failed!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>{loading ? "Processing" : "SignUp"}</h1>
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
        <button
          type="submit"
          className={buttonDisabled ? "disabled" : "signupBtn"}
        >
          SignUp
        </button>
      </form>
    </div>
  );
}
