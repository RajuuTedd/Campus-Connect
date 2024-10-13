// // src/components/LoginSignup/LoginSignup.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginSignup.css"; // Create a simple CSS file for styling

// const LoginSignup = () => {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Dummy login logic
//     if (username) {
//       // Redirect to dashboard
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? Sign up!</p>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../assets/person.png";

import password_icon from "../assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
