import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logindata } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";
import { useRouter } from "next/router";
import styles from "./myNavBar.module.css";
const LoginAndSIgnIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authSlice = useSelector((state) => state.authSlice);
  const [openLogin, setopenLogin] = useState(true);
  const [openSignIn, setopenSignIn] = useState(false);
  const [showErorr, setshowErorr] = useState(false);

  useEffect(() => {
    if (authSlice.isLogIn) {
      router.push("/profile");
    }
    if (!authSlice.isLogIn) {
      return;
    }
  }, [authSlice.isLogIn]);

  const submitLoinHandler = (e) => {
    e.preventDefault();

    const loginbody = {
      email: email,
      password: password,
    };

    dispatch(logindata(loginbody));
    console.log(authSlice.isLogIn);
    setshowErorr(false);
    if (!authSlice.isLogIn) {
      setTimeout(() => setshowErorr(true), 500);
      setTimeout(() => setshowErorr(false), 2000);
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
      setTimeout(() => setshowErorr(true), 500);
      setTimeout(() => setshowErorr(false), 2000);
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
                <div
                  id="errorNotefecation"
                  className={`notification is-danger ${styles.showNotification}`}
                >
                  {authSlice.ErorrMass}
                </div>
              )}
              <p className="is-size-5">login</p>
              <div>
                <input
                  className="input is-primary"
                  placeholder="email"
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <input
                  className="input is-primary"
                  placeholder="password"
                  required
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button type="submit" className="button is-primary">
                Log In
              </button>
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
              <p className="is-size-5">Signin</p>
              <div>
                <input
                  className="input is-primary"
                  placeholder="email"
                  required
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <input
                  className="input is-primary"
                  placeholder="password"
                  required
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button type="submit" className="button is-primary">
                Sign In
              </button>
              <a onClick={openLoginFunction}>Log in with an existing email</a>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default LoginAndSIgnIn;
