import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  user: null,
  signupUser: null,
  loginUser: null,
  logoutUser: null,
  errors: null,
  showLogin: null,
});

export default UserContext;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [userBookings, setUserBookings] = useState([]);

  const [errors, setErrors] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCurrentUser = () => {
    fetch("/api/me").then(currentUserResp);
  };

  const loginUser = (formData) => {
    fetch("/api/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    }).then(authResponseHandler);
  };

  const signupUser = (formData) => {
    fetch("/api/signup", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    }).then(authResponseHandler);
  };

  const logoutUser = () => {
    setErrors([]);
    fetch("/api/logout", { method: "DELETE" }).then(() => {
      setUser(null);
      setShowLogin(true);
      navigate("/login");
    });
  };

  const currentUserResp = (r) => {
    if (r.ok) {
      r.json().then((user) => {
        setUser(user);
        setUserBookings(user.bookings);
        user.email === "joshsmayhew@gmail.com"
          ? setIsAdmin(true)
          : setIsAdmin(false);
      });
    } else {
      setUser(null);
      navigate("/login");
    }
  };

  const authResponseHandler = (r) => {
    if (r.ok) {
      setIsLoading(false);
      r.json().then((user) => {
        setUser(user);
        setUserBookings(user.bookings);
        user.email === "joshsmayhew@gmail.com"
          ? setIsAdmin(true)
          : setIsAdmin(false);
        navigate("/myaccount");
      });
    } else {
      setIsLoading(false);
      r.json().then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([data.error]);
        }
      });
    }
  };

  const buttonClickResponseHandler = (buttonType) => {
    if (buttonType === "login") {
      setShowLogin(true);
      setErrors([]);
      navigate("/login");
    } else {
      setShowLogin(false);
      setErrors([]);
      navigate("/signup");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userBookings,
        setUserBookings,
        isAdmin,
        headers,
        signupUser,
        loginUser,
        logoutUser,
        errors,
        setErrors,
        showLogin,
        setShowLogin,
        fetchCurrentUser,
        buttonClickResponseHandler,
        navigate,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
