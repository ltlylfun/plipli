import "./userButton.css";
import { useState } from "react";
const UserButton = () => {
  const [open, setOpen] = useState(false);
  const curreentUser = true;

  return curreentUser ? (
    <div className="userButton">
      <img src="/plipli/noAvatar.png" alt="" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/plipli/arrow.svg"
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="" className="loginLink">
      Login/Signup
    </a>
  );
};
export default UserButton;
