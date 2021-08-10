import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOpject } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";
import { useRouter } from "next/router";

const signin = () => {
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
      firstName: Firstname,
      lastName: Lastname,
      email: email,
      password: password,
      id: Math.random(),
    };
    dispatch(adduser(body));
    dispatch(setUserOpject());
    router.push("/");
  };

  // useEffect(() => {
  //   // ANY reducer or thunk function MUST be called inside a dispatch()

  // }, []);

  // const addUser = () => {};
  return (
    <section className="container">
      <h1>{authSlice.isLoding ? " Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            required
            type="text"
            id="name"
            onChange={(e) => setFirstname(e.target.value)}
            value={Firstname}
          />
        </div>

        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            required
            type="text"
            id="lastName"
            onChange={(e) => setLastname(e.target.value)}
            value={Lastname}
          />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            required
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            required
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <button type="submit">
            {authSlice.isLoding
              ? "Login with existing account"
              : "Create new account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default signin;
