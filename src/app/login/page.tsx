export default function LoginPage() {
  return (
    <div className="login">
      <form>
        <input type="email" placeholder="Enter your email eg. john@email.com" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Loign</button>
      </form>
    </div>
  );
}
