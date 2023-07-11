import React, { useContext } from "react";
import Backdrop from "../Backdrop";
import SignUP from "./SignUp";
import ResetPassword from "./ResetPassword";
import LogIn from "./LogIn";
import classes from "../../Styles/Auth.module.css";
import AuthenticationContext from "../../Store/Authentication-context";

const Auth = () => {
  const AuthenticationCtx = useContext(AuthenticationContext);
  const open = AuthenticationCtx.open;
  return (
    <div className={classes.Auth_container}>
      {(open.signupOpen || open.ResetPasswordOpen || open.LogInOpen) && (
        <Backdrop
          onClick={() => {
            AuthenticationCtx.onHide("all");
          }}
        />
      )}
      <div className={classes.auth_box}>
        {open.signupOpen && <SignUP />}
        {open.ResetPasswordOpen && <ResetPassword />}
        {open.LogInOpen && <LogIn />}
      </div>
    </div>
  );
};

export default Auth;
