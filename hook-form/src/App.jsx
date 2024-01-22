import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pasnew, setRepeatPassword] = useState("");

  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    const newUser = {
      username: username,
      lastName: lastName,
      email: email,
      password: password,
      pasnew: pasnew,
    };
    console.log("Welcome", newUser);
    setUsername("", username);
    setEmail("", email);
    setPassword("", password);
    setRepeatPassword("", pasnew);
  };
  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label>Email Address: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={pasnew}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Create User" />
      </form>

      <div>
        <p>Your Form Data</p>
        <p> First Name {username}</p>
        <p>Last Name {lastName}</p>
        <p>Email {email}</p>
        <p>Password {password}</p>
        <p>Confirm Pasword {pasnew}</p>
      </div>
    </>
  );
};

export default UserForm;
