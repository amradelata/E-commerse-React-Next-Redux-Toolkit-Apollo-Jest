import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOpject } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./signin.module.css";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authSlice = useSelector((state) => state.authSlice);
  //if user loged in dont show this page
  useEffect(() => {
    if (authSlice.isLogIn) {
      router.push("/profile");
    }
    if (!authSlice.isLogIn) {
      router.push("/signin");
    }
  }, [authSlice.isLogIn]);
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    dispatch(adduser(body));
  };

  return (
    <section className="container">
      <div className={styles.dad}>
        <div>
          <p className="is-size-5">Sign Up</p>
        </div>
        <div>
          <Link href="/login">
            <a className={`${styles.myLink} is-size-5`}>login</a>
          </Link>
          <Link href="/signin">
            <a className={`${styles.myLink} is-size-5`}>signin</a>
          </Link>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <div className={styles.formInputs}>
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
        </div>
        <div>
          <button className="button " type="submit">
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signin;
