import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import classes from "../../Styles/Auth.module.css";
import Svgcross from "../../Public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";

interface Values {
  email: string;
  open: boolean;
  error: string;
}

const LogIn = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState<Values>({
    email: "",
    open: false,
    error: "",
  });

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const submit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const response = await Auth({ email: values.email }, "signin");
    if (response === "true") {
      AuthenticationCtx.setDetails(values.email, "", "");
      setValues({ email: "", open: true, error: "" });
      AuthenticationCtx.onShow("VerifyOpen");
    }
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
        </div>
        <div className={classes.continue} onClick={submit}>
          <a>Login</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default LogIn;
