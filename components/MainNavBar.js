import styles from "./myNavBar.module.css";
import LoginAndSignPopup from "./LoginAndSignPopup";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getSearchProdcutsData } from "../store/slices/products.slice";
import { logOut } from "../store/slices/auth";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
const MainNavBar = () => {
  const [togellDropdown, settogellDropdown] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false);
  const [togglePhoneNav, settogglePhoneNav] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const searchInputRef = useRef();
  const router = useRouter();
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authSlice.isLogIn) {
      setshowPopUp(false);
      settogellDropdown(false);
    }
  }, [authSlice.isLogIn]);

  const searchFunction = (e) => {
    if (e.keyCode === 13) {
      const myValue = e.target.value.toLowerCase();
      dispatch(getSearchProdcutsData(myValue));
      router.push(`/search?name=${myValue}`);
    }
  };
  const logOutFunction = () => {
    dispatch(logOut());
    settogellDropdown(false);
    router.push("/");
  };
  const foucsSearchInput = () => {
    // document.getElementById("searchInput").focus();
    setshowSearch(!showSearch);
    // searchInputRef.current.focus();
  };
  const openPhoneNave = () => {
    settogglePhoneNav(!togglePhoneNav);
    console.log(togglePhoneNav);
  };
  const OpnPopUp = () => {
    setshowPopUp(true);
  };
  const ClosePopUp = () => {
    setshowPopUp(false);
  };
  const togellDropdownFunction = () => {
    settogellDropdown(!togellDropdown);
  };
  return (
    <>
      <nav className={`container is-fluid navbar ${styles.myNav}`}>
        <ul className={styles.UL}>
          <li>
            <Link href="/">
              <a className={styles.myLink}>SHOP</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a className={styles.myLink}>ABOUT</a>
            </Link>
          </li>
          {authSlice.isLogIn && (
            <li>
              <Link href="/profile">
                <a className={styles.myLink}>profile</a>
              </Link>
            </li>
          )}
        </ul>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => openPhoneNave()}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        {togglePhoneNav ? (
          <ul className={styles.PhoneNav}>
            <Link href="/">
              <li>
                <a className={styles.myLink}>SHOP</a>
              </li>
            </Link>

            <Link href="/about">
              <li>
                <a className={styles.myLink}>ABOUT</a>
              </li>
            </Link>

            {authSlice.isLogIn && (
              <Link href="/profile">
                <li>
                  <a className={styles.myLink}>PROFILE</a>
                </li>
              </Link>
            )}
          </ul>
        ) : (
          ""
        )}

        <div className={`navbar-end ${styles.navbarEnd}`} id="myNavEnd">
          <ul className={styles.EndUL}>
            <li className={styles.showInPhone}>
              <Link href="/">
                <a className={styles.myLink}>SHOP</a>
              </Link>
            </li>
            <li>
              {/* //search */}

              <div className={styles.searchBox}>
                <input
                  onKeyDown={searchFunction}
                  className={` ${
                    showSearch ? styles.searchTextActiv : styles.searchText
                  }`}
                  type="text"
                  placeholder="Search Anything"
                  onClick={foucsSearchInput}
                />

                <button className={styles.searchBtn} onClick={foucsSearchInput}>
                  <img src="/./icons/search.svg" />
                </button>
              </div>
            </li>
            <li>
              <div className={`dropdown ${togellDropdown ? "is-active" : ""}`}>
                <div className="dropdown-trigger">
                  {authSlice.isLogIn ? (
                    <button
                      onClick={() => togellDropdownFunction()}
                      className={styles.searchBtn}
                    >
                      <p className={styles.userNmae}>
                        {authSlice.user.charAt(0)}
                      </p>
                    </button>
                  ) : (
                    <button
                      onClick={() => togellDropdownFunction()}
                      className={styles.searchBtn}
                    >
                      <img
                        src="/./icons/avatar.svg"
                        className={styles.userNmae}
                      />
                    </button>
                  )}
                </div>

                {/* {togellDropdown && ( */}
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content" id="dropdown-content">
                    {authSlice.isLogIn && (
                      <div>
                        <Link href="/profile">
                          <div className={`dropdown-item ${styles.navItem}`}>
                            <a>
                              <p>Signed in as</p>
                              {authSlice.user.slice(0, 3)}
                            </a>
                          </div>
                        </Link>
                      </div>
                    )}

                    <Link href="/about">
                      <div className={`dropdown-item ${styles.navItem}`}>
                        <a>ABOUT</a>
                      </div>
                    </Link>

                    <a onClick={() => OpnPopUp()}>
                      {!authSlice.isLogIn && (
                        <div className={`dropdown-item ${styles.navItem}`}>
                          <a>Log In</a>
                        </div>
                      )}
                    </a>
                    {authSlice.isLogIn && (
                      <div
                        onClick={() => logOutFunction()}
                        className={`dropdown-item ${styles.navItem}`}
                      >
                        <a>Log Out</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
            {authSlice.isLogIn && (
              <li className={styles.cartPtn}>
                <Link href="/cart">
                  <a>
                    <button className={styles.searchBtn}>
                      <img
                        src="/./icons/cart.svg"
                        className={styles.cartIcon}
                      />
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
            )}
          </ul>
        </div>
      </nav>
      <hr className={styles.myHr} />

      <div className={`modal ${showPopUp ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <LoginAndSignPopup />
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => ClosePopUp()}
        ></button>
      </div>
    </>
  );
};
export default MainNavBar;
