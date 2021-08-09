import { useState, useRef, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOpject } from "../store/slices/auth";
import { adduser } from "../store/slices/auth";

const signin = () => {
  const 
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  // const [isLoding, setisLoding] = useState(false);
  const dispatch = useDispatch();
  const authSlice = useSelector((state)=> state.authSlice)
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
  };

  // const addUser = () => {};
  return (
    <section className="container">
      <h1>{isLogin ? "Sign Up" : "Login"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setFirstname(e.target.value)}
            value={Firstname}
          />
        </div>

        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            id="lastName"
            required
            onChange={(e) => setLastname(e.target.value)}
            value={Lastname}
          />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          {/* {!isLoding && <button>{isLogin ? "Login" : "Create Account"}</button>} */}
          {/* {isLoding && <p>Loding...</p>} */}
          <button type="submit">
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default signin;
