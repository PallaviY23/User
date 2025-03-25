import React, { useState } from "react";

export default function Adminsignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email Validation Function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Invalid Email Format!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setError("");
    alert("Sign-in successful!"); // Replace with actual authentication logic
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 rounded" style={{ width: "350px" }}>
        <h2 className="text-center" style={{ fontSize: "40px" }}>Sign In</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} style={{ backgroundColor: "#e1d3fa" }}>
          <div className="mb-3">
            <label className="form-label fw-bold">EMAIL</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">PASSWORD</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-dark w-100" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
