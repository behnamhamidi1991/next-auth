import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <form className="register-form">
        <h1>Register Form</h1>
        <input type="text" placeholder="Enter your name e.g. John Doe" />
        <input type="email" placeholder="Enter your email eg. john@email.com" />
        <input type="password" placeholder="Enter your password" />
        <input type="password" placeholder="Confirm your" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
