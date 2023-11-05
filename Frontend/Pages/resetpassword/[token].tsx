import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotification } from "../../Hook/useNotification";
import Head from "next/head";
import classes from "../../Styles/Auth.module.css";
import useAuth from "../../Hook/useAuth";
import SvgOpen from "../../Public/SvgOpen";
import SvgClosed from "../../Public/SvgClosed";
import LoadingSpinner from "../../Components/LoadingSpinner";

interface Values {
  email: string;
  password: string;
  open: boolean;
  error: string;
}
interface backendUser {
  email: string;
  userId: string;
  passwordToken: string;
}

const resetpassword = () => {
  const router = useRouter();
  const { token } = router.query;
  const { NotificationHook } = useNotification();
  const [correctUser, setCorrectUser] = useState<string>("0");
  const [backendUserData, setbackendUserData] = useState<backendUser>({
    email: "",
    userId: "",
    passwordToken: "",
  });

  useEffect(() => {
    const callFunction = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/user/getnewpassword/${token}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const responsedata = await response.json();
        NotificationHook(responsedata.message, responsedata.type);
        if (responsedata.type == "Error") {
          setCorrectUser("1");
        } else {
          setbackendUserData({
            userId: responsedata.userId,
            email: responsedata.email,
            passwordToken: responsedata.passwordToken,
          });
          setCorrectUser("2");
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };
    if (token) callFunction();
  }, [token]);

  const { Auth } = useAuth();

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
      {
        passwordToken: backendUserData.passwordToken,
        userId: backendUserData.userId,
        password: values.password,
      },
      "newPassword"
    );
    if (response == "Success") {
      setValues({ email: "", password: "", open: true, error: "" });
    }
  };

  return (
    <div className={classes.resetcontainer}>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
        <title>Reset Password</title>
        <meta name="Reset Password" content="Reset Password" />
      </Head>
      {correctUser === "2" ? (
        <div className={classes.box}>
          <div className={classes.part1}>
            <div className={classes.part1_left}>
              <h1>Reset Password</h1>
              <div className={classes.underline}> </div>
            </div>
            <div className={classes.part1_right}>
              <img src="/logo.jpeg" alt="" />
            </div>
          </div>
          <div className={classes.form}>
            <input
              type="email"
              placeholder="Enter email id"
              value={backendUserData.email}
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
            <a>Save Password</a>
          </div>
          <div className={classes.privacy_policy}>
            By creating an account, I accept the Terms & Conditions & Privacy
            Policy
          </div>
        </div>
      ) : (
        <>
          {correctUser === "1" ? (
            <div className={classes.wronguser}>You have not authintication</div>
          ) : (
            <LoadingSpinner />
          )}
        </>
      )}
    </div>
  );
};

export default resetpassword;
