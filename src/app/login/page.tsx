"use client";
import "./login.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Fetch data
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user, {
        withCredentials: true,
      });
      toast.success("Login successfully :)");
      console.log(response.data);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>{loading ? "Processing" : "Login Form"}</h1>
        <input
          type="email"
          placeholder="Email e.g. john@email.com"
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
          className={buttonDisabled ? "loginDisabled" : "loginBtn"}
        >
          Loign
        </button>
      </form>
    </div>
  );
}
