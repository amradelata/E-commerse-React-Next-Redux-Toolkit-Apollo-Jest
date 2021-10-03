import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../store/slices/auth";
import { addUser } from "../store/slices/auth";
import styles from "./MainNavBar/MainNavBar.module.css";
import PurpleButton from "../components/PurpleButton/PurpleButton";
const LoginAndSignPopup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const [openLogin, setOpenLogin] = useState(true);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [showError, setShowError] = useState(false);

  const submitLoinHandler = (e) => {
    e.preventDefault();

    const loginBody = {
      email: email,
      password: password,
    };

    dispatch(loginData(loginBody));

    setShowError(false);
    if (!AuthSlice.isLogIn) {
      setTimeout(() => setShowError(true), 500);
      setTimeout(() => setShowError(false), 3000);
    }
  };
  const submitSignInHandler = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    dispatch(addUser(body));
    setShowError(false);
    if (!AuthSlice.isLogIn) {
      setTimeout(() => setShowError(true), 600);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const openLoginFunction = (e) => {
    e.preventDefault();
    setOpenSignIn(!openSignIn);
    setOpenLogin(!openLogin);
  };

  const openSignInFunction = (e) => {
    e.preventDefault();
    setOpenSignIn(!openSignIn);
    setOpenLogin(!openLogin);
  };
  return (
    <>
      <div>
        {openLogin && (
          <div className={styles.LoginForm} id="login">
            <form onSubmit={submitLoinHandler}>
              {showError && (
                <div className={styles.showNotification}>
                  {AuthSlice.ErrorMassage}
                </div>
              )}

              <div>
                <label>Email</label>
                <input
                  placeholder="email"
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  placeholder="password"
                  required
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <PurpleButton name={"Log In"} myType={"submit"} width={"100%"} />

              <span>New in shop?</span>
              <a onClick={openSignInFunction}>Create new account</a>
            </form>
          </div>
        )}

        {openSignIn && (
          <div className={styles.signInForm} id="signIn">
            <form onSubmit={submitSignInHandler}>
              {showError && (
                <div
                  className={`notification is-danger ${styles.showNotification}`}
                >
                  {AuthSlice.ErrorMassage}
                </div>
              )}

              <div>
                <label>Email</label>
                <input
                  placeholder="email"
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  placeholder="password"
                  required
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <PurpleButton name={"Sign In"} myType={"submit"} width={"100%"} />
              <span>Already have an account?</span>
              <a onClick={openLoginFunction}>Log in</a>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default LoginAndSignPopup;
