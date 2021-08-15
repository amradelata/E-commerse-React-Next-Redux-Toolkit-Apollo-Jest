import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOpject } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./signin.module.css";

const Signin = () => {
  const router = useRouter();
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoding, setisLoding] = useState("");
  // const [isLoding, setisLoding] = useState(false);
  const dispatch = useDispatch();
  const authSlice = useSelector((state) => state.authSlice);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      // firstName: Firstname,
      // lastName: Lastname,
      email: email,
      password: password,
      // id: Math.random(),
    };
    console.log(body);
    dispatch(adduser(body));
    dispatch(setUserOpject());
    // router.push("/");
  };

  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()

  // }, []);

  // const addUser = () => {};
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
          {/* <div>
            <input
              className="input is-primary"
              placeholder="Firstname"
              input
              is-primary
              required
              type="text"
              id="name"
              onChange={(e) => setFirstname(e.target.value)}
              value={Firstname}
            />
          </div>

          <div>
            <input
              className="input is-primary"
              placeholder="Lastname"
              input
              is-primary
              required
              type="text"
              id="lastName"
              onChange={(e) => setLastname(e.target.value)}
              value={Lastname}
            />
          </div> */}
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

      {/* <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button className="button " type="submit">
          Create new account
        </button>
      </form> */}
    </section>
  );
};

export default Signin;
