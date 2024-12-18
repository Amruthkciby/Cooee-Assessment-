import React, { useState } from "react";
import "./App.css";
import Armstrong from "./armstrong";

const App = () => {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track logged-in user

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === "register") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const userExists = users.some((user) => user.email === formData.email);
      if (userExists) {
        alert("User already exists.");
        return;
      }

      setUsers([
        ...users,
        { username: formData.username, email: formData.email, password: formData.password },
      ]);
      alert("Registration successful!");
      setFormType("login");
    }

    if (formType === "login") {
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (user) {
        alert("Login successful!");
        setLoggedInUser(user);
        setFormType("armstrong"); // Switch to Armstrong checking form
      } else {
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <div className="App">
      {formType === "armstrong" ? (
        <Armstrong username={loggedInUser.username} />
      ) : (
        <div className="form-container">
          <h2>{formType === "login" ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            {formType === "register" && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            {formType === "register" && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}
            <button type="submit" className="submit-btn">
              {formType === "login" ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {formType === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              className="toggle-btn"
              onClick={() => setFormType(formType === "login" ? "register" : "login")}
            >
              {formType === "login" ? "Register" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
