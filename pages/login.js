import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogIn } from "../store/slices/auth";
import styles from "./login.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

const Login = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const loginbody = {
      email: email,
      password: password,
    };
    dispatch(UserLogIn(loginbody));
    router.push("/");
  };

  return (
    // <section className="container">
    //   <Link href="/login">login</Link>
    //   <Link href="/signin">signin</Link>
    //   <h1>Login</h1>
    //   <form onSubmit={submitHandler}>
    //     <div>
    //       <label htmlFor="email">Your Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Your Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //       />
    //     </div>
    //     <div>
    //       <button type="submit">Login with existing account</button>
    //     </div>
    //   </form>
    // </section>
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
              input
              is-primary
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
              input
              is-primary
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
