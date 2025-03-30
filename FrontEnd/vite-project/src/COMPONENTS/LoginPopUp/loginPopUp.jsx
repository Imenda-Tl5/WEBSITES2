import React, { useContext, useState } from "react";
import "./loginPopUp.css";
import { FoodContext } from "../FoodContext";

const LoginPopUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const { login, setLogin } = useContext(FoodContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const url =
      login === "signUp"
        ? "http://localhost:4000/api/register"
        : "http://localhost:4000/api/login";
    const payload =
      login === "signUp"
        ? { username, email, password }
        : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      alert(login === "signUp" ? "Signup successful!" : "Login successful!");
      setLogin("logged_in");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="header">
          <div className="log-in-head">
            <h1>{login === "signUp" ? "SIGNUP" : "LOGIN"}</h1>
            <h1 onClick={() => setLogin("not_logged_in")} className="close">
              X
            </h1>
          </div>
        </div>
        <div className="input-fields">
          {login === "signUp" && (
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            value={email}
            type="email"
            id="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="info">
          <p>
            {login === "signUp"
              ? "Already have an account?"
              : "Don't have an account yet?"}{" "}
            Click here to{" "}
            <span
              onClick={() =>
                setLogin((prev) => (prev === "signUp" ? "logIn" : "signUp"))
              }
            >
              {login === "signUp" ? "Log In" : "Sign Up"}
            </span>
          </p>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Processing..." : login === "signUp" ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
