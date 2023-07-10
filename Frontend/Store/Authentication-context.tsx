import React, { useState, createContext, ReactNode } from "react";

interface AuthenticationContextProps {
  open: {
    signupOpen: boolean;
    VerifyOpen: boolean;
    LogInOpen: boolean;
    error: string;
  };
  details: {
    phone: string;
    name: string;
    email: string;
  };
  onShow: (name: string) => void;
  onHide: (name: string) => void;
  setDetails: (phone: string, name: string, email: string) => void;
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
  open: {
    signupOpen: false,
    VerifyOpen: false,
    LogInOpen: false,
    error: "",
  },
  details: {
    phone: "",
    name: "",
    email: "",
  },
  onShow: () => {},
  onHide: () => {},
  setDetails: () => {},
});

interface AuthenticationContextProviderProps {
  children: ReactNode;
}

export const AuthenticationContextProvider: React.FC<
  AuthenticationContextProviderProps
> = ({ children }) => {
  const [open, setOpen] = useState({
    signupOpen: false,
    VerifyOpen: false,
    LogInOpen: false,
    error: "",
  });

  const [details, setDetails] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const showHandler = (name: string) => {
    if (name === "VerifyOpen") {
      setOpen({
        error: "",
        LogInOpen: false,
        [name]: true,
        signupOpen: false,
      });
    } else if (name === "signupOpen") {
      setOpen({
        error: "",
        VerifyOpen: false,
        [name]: true,
        LogInOpen: false,
      });
    } else if (name === "LogInOpen") {
      setOpen({
        error: "",
        VerifyOpen: false,
        [name]: true,
        signupOpen: false,
      });
    }
  };

  const hideHandler = (name: string) => {
    if (name === "all") {
      setOpen({
        signupOpen: false,
        VerifyOpen: false,
        LogInOpen: false,
        error: "",
      });
    } else {
      setOpen({ ...open, [name]: false });
    }
  };

  const setNewDetails = (phone: string, name: string, email: string) => {
    setDetails({
      phone: phone,
      name: name,
      email: email,
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        open: open,
        onShow: showHandler,
        onHide: hideHandler,
        setDetails: setNewDetails,
        details: details,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
