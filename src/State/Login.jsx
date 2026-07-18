import { useRef, useState } from "react";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState("yona");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email.length === 0) {
      alert("Email is required");
      emailRef.current.focus();
      return;
    }

    if (password === "") {
      alert("Password is required");
      passwordRef.current.focus();
      return;
    }

   

    // Send data to the backend
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
         value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;