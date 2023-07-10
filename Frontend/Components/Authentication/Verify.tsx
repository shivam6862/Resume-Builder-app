import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import classes from "../../Styles/Auth.module.css";
import Svgcross from "../../Public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";

interface Values {
  code: string;
  open: boolean;
  error: string;
}

const Verify = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  var email = AuthenticationCtx.details.email;
  if (email == "") email = "Email Id";
  const [values, setValues] = useState<Values>({
    code: "",
    open: false,
    error: "",
  });

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const submit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const response = await Auth({ otp: values.code, email: email }, "verify");
    if (response == "true") {
      setValues({ code: "", open: true, error: "" });
      AuthenticationCtx.onHide("VerifyOpen");
    }
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("VerifyOpen");
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
              <span>or</span> login to your account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <img src="/logo.jpeg" alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <input type="text" placeholder={email} />
          <input
            type="number"
            placeholder="One time password"
            value={values.code}
            onChange={handleChange("code")}
          />
        </div>
        <div
          className={classes.continue}
          onClick={submit}
          style={{ margin: "1rem auto" }}
        >
          <a>VERIFY OTP</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default Verify;
