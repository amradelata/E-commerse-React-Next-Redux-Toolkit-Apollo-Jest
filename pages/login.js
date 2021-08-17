import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UserLogIn } from "../store/slices/auth";
import { logindata } from "../store/slices/auth";
import { Profile } from "../pages/profile";
import styles from "./login.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

const Login = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authSlice = useSelector((state) => state.authSlice);

  //if user loged in dont show this page
  useEffect(() => {
    if (authSlice.isLogIn) {
      router.push("/profile");
    }
    if (!authSlice.isLogIn) {
      router.push("/login");
      // alert("something went wrong");
    }
  }, [authSlice.isLogIn]);
  const submitHandler = (e) => {
    e.preventDefault();

    const loginbody = {
      email: email,
      password: password,
    };

    dispatch(logindata(loginbody));
  };

  return (
    <section className="container">
      <div className={styles.dad}>
        <div>
          <p className="is-size-5">Login</p>
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
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};

//https://vue-e-commerce-databse.herokuapp.com/users?id=1

// export async function getServerSideProps(context, email) {
//   const res = await fetch(
//     `https://vue-e-commerce-databse.herokuapp.com/users?email=${email}`
//   );
//   const user_data = await res.json();
//   console.log(user_data, context.query);
//   // route guard useing dynamic routing data
//   //   if (user_data) {
//   //     return {
//   //       redirect: {
//   //         destination: "/signin",
//   //         permanent: false,
//   //       },
//   //     };
//   //   }

//   return {
//     props: {
//       user_data: user_data,
//     }, // will be passed to the page component as props
//   };
// }

export default Login;
