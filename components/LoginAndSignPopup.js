import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logindata } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";
import styles from "./MainNavBar/MainNavBar.module.css";
import PurpleButton from "../components/PurpleButton/PurpleButton";
const LoginAndSignPopup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authSlice = useSelector((state) => state.authSlice);
  const [openLogin, setopenLogin] = useState(true);
  const [openSignIn, setopenSignIn] = useState(false);
  const [showErorr, setshowErorr] = useState(false);

  const submitLoinHandler = (e) => {
    e.preventDefault();

    const loginbody = {
      email: email,
      password: password,
    };

    dispatch(logindata(loginbody));

    setshowErorr(false);
    if (!authSlice.isLogIn) {
      setTimeout(() => setshowErorr(true), 500);
      setTimeout(() => setshowErorr(false), 3000);
    }
  };
  const submitSignInHandler = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    dispatch(adduser(body));
    setshowErorr(false);
    if (!authSlice.isLogIn) {
      setTimeout(() => setshowErorr(true), 600);
      setTimeout(() => setshowErorr(false), 3000);
    }
  };

  const openLoginFunction = (e) => {
    e.preventDefault();
    setopenSignIn(!openSignIn);
    setopenLogin(!openLogin);
  };

  const openSignInFunction = (e) => {
    e.preventDefault();
    setopenSignIn(!openSignIn);
    setopenLogin(!openLogin);
  };
  return (
    <>
      <div>
        {openLogin && (
          <div className={styles.LoginForm} id="login">
            <form onSubmit={submitLoinHandler}>
              {showErorr && (
                <div id="errorNotefecation" className={styles.showNotification}>
                  {authSlice.ErorrMass}
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

              <PurpleButton name={"Log In"} mytype={"submit"} />

              <span>New in shop?</span>
              <a onClick={openSignInFunction}>Create new account</a>
            </form>
          </div>
        )}

        {openSignIn && (
          <div className={styles.SigninForm} id="signIn">
            <form onSubmit={submitSignInHandler}>
              {showErorr && (
                <div
                  id="errorNotefecation"
                  className={`notification is-danger ${styles.showNotification}`}
                >
                  {authSlice.ErorrMass}
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

              <PurpleButton name={"Sign In"} mytype={"submit"} />
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
