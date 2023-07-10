import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import classes from "../../Styles/Auth.module.css";
import Svgcross from "../../Public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";

interface Values {
  phone: string;
  name: string;
  email: string;
  open: boolean;
  error: string;
}

const SignUP = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState<Values>({
    phone: "",
    name: "",
    email: "",
    open: false,
    error: "",
  });

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const CONTINUE_submit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    AuthenticationCtx.setDetails(values.phone, values.name, values.email);
    const response = await Auth(
      { number: values.phone, name: values.name, email: values.email },
      "signup"
    );
    if (response == "true") {
      setValues({ phone: "", name: "", email: "", error: "", open: true });
      AuthenticationCtx.onShow("LogInOpen");
    }
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("signupOpen");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div
          className={classes.close}
          onClick={() => {
            hideHandler();
          }}
        >
          <Svgcross />
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Sign up</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("LogInOpen");
              }}
            >
              <span>or</span>login to your account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/logo.jpeg" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange("name")}
          />
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <input
            type="number"
            placeholder="Phone number"
            value={values.phone}
            onChange={handleChange("phone")}
          />
        </div>
        <div
          className={classes.continue}
          onClick={(e) => {
            CONTINUE_submit(e);
          }}
        >
          <a>CONTINUE</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default SignUP;
