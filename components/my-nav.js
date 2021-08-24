import styles from "./myNavBar.module.css";
import Popup from "reactjs-popup";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/slices/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { adduser } from "../store/slices/auth";
const Nav = () => {
  const [searchInput, setsearchInput] = useState("");

  const router = useRouter();
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const searchFunction = (e) => {
    const myValue = e.target.value.toLowerCase();
    console.log(myValue);
    // async () => {
    //   const data = await fetch(`http://localhost:3001/products?name=${myValue}`).then((res) => res.json())
    //   console.log(data)
    //   )
  };
  const logOutFunction = () => {
    dispatch(logOut());
    let element = document.getElementById("dropdown-menu");
    element.classList.toggle("is-active");
    router.push("/");
  };
  // const toggleDropdown = () => {
  //   let element = document.getElementById("dropdown-menu");
  //   element.classList.toggle("is-active");
  // };
  const [openLogin, setopenLogin] = useState(true);
  const [openSignIn, setopenSignIn] = useState(false);
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
      <div className={`container is-fluid navbar ${styles.myNav}`}>
        <ul className={styles.UL}>
          <li>
            <Link href="/">
              <a className={styles.myLink}>SHOP</a>
            </Link>
          </li>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <li>
            <Link href="/about">
              <a className={styles.myLink}>ABOUT</a>
            </Link>
          </li>
          {authSlice.isLogIn ? (
            <li>
              <Link href="/profile">
                <a className={styles.myLink}>profile</a>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="navbar-end">
          <ul className={styles.UL}>
            <li>
              {/* //search */}

              <div className={styles.searchBox}>
                <input
                  onChange={searchFunction}
                  className={styles.searchText}
                  type="text"
                  placeholder="Search Anything"
                />
                <button className={styles.searchBtn}>
                  <img src="/./icons/search.svg" />
                </button>
              </div>
            </li>
            <li>
              <Popup
                trigger={
                  <button className={styles.searchBtn}>
                    {authSlice.isLogIn ? (
                      <p className={styles.userNmae}>
                        {authSlice.user.charAt(0)}
                      </p>
                    ) : (
                      <img
                        src="/./icons/avatar.svg"
                        className={styles.avatar}
                      />
                    )}
                  </button>
                }
                nested
                modal
              >
                <div className={styles.dropdownContent}>
                  {authSlice.isLogIn ? (
                    <li>
                      <Link href="/profile">
                        <a className="dropdown-item">profile</a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <Link href="/about">
                    <a className="dropdown-item">ABOUT</a>
                  </Link>

                  {!authSlice.isLogIn ? (
                    <Popup
                      trigger={
                        <a href="#" className="dropdown-item">
                          Log In
                          {/* <Link href="/login">Log In</Link> */}
                        </a>
                      }
                      modal
                      nested
                    >
                      {openLogin ? (
                        <div className={styles.LoginForm}>
                          <form>
                            <p>login</p>
                            <input />
                            <input />
                            <button>supmit</button>
                            <button onClick={openSignInFunction}>
                              careat new account
                            </button>
                          </form>
                        </div>
                      ) : (
                        ""
                      )}
                      {openSignIn ? (
                        <div className={styles.SigninForm}>
                          <form>
                            <p>Signin</p>
                            <input />
                            <input />
                            <button>supmit</button>
                            <button onClick={openLoginFunction}>
                              login with exest account
                            </button>
                          </form>
                        </div>
                      ) : (
                        ""
                      )}
                    </Popup>
                  ) : (
                    ""
                  )}

                  {authSlice.isLogIn ? (
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => logOutFunction()}
                    >
                      Log Out
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </Popup>
            </li>
            {authSlice.isLogIn ? (
              <li className={styles.cartPtn}>
                <Link href="/Cart">
                  <a>
                    <button className={styles.searchBtn}>
                      <img src="/./icons/cart.svg" className={styles.avatar} />
                      {CartSlice.cart_products.length < 1 ? (
                        ""
                      ) : (
                        <span className={styles.cartNum}>
                          {" " + CartSlice.cart_products.length}
                        </span>
                      )}
                    </button>
                  </a>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <hr className={styles.myHr} />
    </>
  );
};
export default Nav;
