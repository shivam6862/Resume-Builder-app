import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import classes from "../../Styles/Auth.module.css";
import Svgcross from "../../Public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";
import SvgOpen from "../../Public/SvgOpen";
import SvgClosed from "../../Public/SvgClosed";

interface Values {
  email: string;
  password: string;
  open: boolean;
  error: string;
}

const LogIn = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    open: false,
    error: "",
  });
  const [isTextPassword, setIsTextPassword] = useState<boolean>(true);

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const submit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const response = await Auth(
      { email: values.email, password: values.password },
      "signin"
    );
    if (response === "Success") {
      AuthenticationCtx.setDetails(values.email, "", "");
      setValues({ email: "", open: true, error: "", password: "" });
    }
  };

  const openResetPasswordHandler = () => {
    AuthenticationCtx.onShow("ResetPasswordOpen");
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("LogInOpen");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.close} onClick={hideHandler}>
          <Svgcross />
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Login</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("signupOpen");
              }}
            >
              <span>or</span> create an account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/logo.jpeg" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input
            type="email"
            placeholder="Email Id"
            value={values.email}
            onChange={handleChange("email")}
          />
          <input
            type={!isTextPassword ? "text" : "password"}
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <div
            className={classes.openclosed}
            onClick={() => {
              setIsTextPassword((prev) => !prev);
            }}
          >
            {!isTextPassword ? <SvgOpen /> : <SvgClosed />}
          </div>
        </div>
        <div className={classes.continue} onClick={submit}>
          <a>Login</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
        <div
          className={classes.forgotPassord}
          onClick={openResetPasswordHandler}
        >
          Forgot Password
        </div>
      </div>
    </div>
  );
};

export default LogIn;
