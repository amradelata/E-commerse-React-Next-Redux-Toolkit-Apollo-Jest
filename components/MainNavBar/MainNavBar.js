import styles from "./MainNavBar.module.css";
import LoginAndSignPopup from "../LoginAndSignPopup";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getSearchProdcutsData } from "../../store/slices/products.slice";
import { logOut } from "../../store/slices/auth";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import ActiveLink from "../ActiveLink";
import Image from "next/image";

const MainNavBar = () => {
  const [togellDropdown, settogellDropdown] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false);
  const [togglePhoneNav, settogglePhoneNav] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const router = useRouter();
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);

  const textInput = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authSlice.isLogIn) {
      setshowPopUp(false);
      settogellDropdown(false);
    }
  }, [authSlice.isLogIn]);

  const searchFunction = (e) => {
    const myValue = e.target.value.toLowerCase();
    if (e.keyCode === 13) {
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
    setshowSearch(true);
    textInput.current.focus();
  };
  const unfoucsSearchInput = (e) => {
    setshowSearch(false);
    textInput.current.value = "";
  };
  const openPhoneNave = () => {
    settogglePhoneNav(!togglePhoneNav);
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
        <style jsx>{`
          .active:after {
            content: "";
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 30px;
            height: 4px;
            background-color: #ef5013;
            opacity: 1;
            color: #ef5013;
          }
          li.active {
            position: relative;
            color: #ef5013;
          }
        `}</style>
        <div>
          <ul className={styles.UL}>
            <li>
              <ActiveLink activeClassName="active" href="/products/1">
                <a className={styles.myLink}>shopping</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/about">
                <a className={styles.myLink}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/countries-we-ship-to">
                <a className={styles.myLink}>We ship to</a>
              </ActiveLink>
            </li>
            {authSlice.isLogIn && (
              <li>
                <ActiveLink activeClassName="active" href="/profile">
                  <a className={styles.myLink}>Profile</a>
                </ActiveLink>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.logo}>
          <Link href="/products/1" passHref>
            <a>
              <Image
                src="/./icons/logo.svg"
                alt="search"
                width="100"
                height="33"
              />
            </a>
          </Link>
        </div>
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

        {togglePhoneNav && (
          <ul className={styles.PhoneNav}>
            <Link href="/" passHref>
              <li>
                <a className={styles.myLink}>SHOP</a>
              </li>
            </Link>

            <Link href="/about" passHref>
              <li>
                <a className={styles.myLink}>ABOUT</a>
              </li>
            </Link>

            {authSlice.isLogIn && (
              <Link href="/profile" passHref>
                <li>
                  <a className={styles.myLink}>PROFILE</a>
                </li>
              </Link>
            )}
          </ul>
        )}

        <div>
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
                  onClick={foucsSearchInput}
                  className={` ${
                    showSearch ? styles.searchTextActiv : styles.searchText
                  }`}
                  ref={textInput}
                  type="text"
                  placeholder="Search"
                />

                {showSearch ? (
                  <button
                    className={styles.searchBtn}
                    onClick={unfoucsSearchInput}
                  >
                    <p>X</p>
                  </button>
                ) : (
                  <button
                    className={styles.searchBtn}
                    onClick={foucsSearchInput}
                  >
                    <Image
                      src="/./icons/search.svg"
                      alt="search"
                      width="18"
                      height="33"
                    />
                  </button>
                )}
              </div>
            </li>
            <li>
              <div className={`dropdown ${togellDropdown && "is-active"}`}>
                <div className="dropdown-trigger">
                  {authSlice.isLogIn ? (
                    <button
                      onClick={() => togellDropdownFunction()}
                      className={styles.avatarBtn}
                    >
                      <p className={styles.userNmae}>
                        {authSlice.user.charAt(0)}
                      </p>
                    </button>
                  ) : (
                    <button
                      onClick={() => togellDropdownFunction()}
                      className={styles.avatarBtn}
                    >
                      <Image
                        src="/./icons/avatar.svg"
                        alt="avatar"
                        width="33"
                        height="33"
                      />
                    </button>
                  )}
                </div>

                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content" id="dropdown-content">
                    {authSlice.isLogIn && (
                      <div>
                        <Link href="/profile" passHref>
                          <div className={`dropdown-item ${styles.navItem}`}>
                            <a>
                              <p>Signed in as</p>
                              {authSlice.user.slice(0, 3)}
                            </a>
                          </div>
                        </Link>
                      </div>
                    )}

                    <Link href="/about" passHref>
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
                      <Image
                        src="/./icons/cart.svg"
                        alt="cart"
                        width="33"
                        height="33"
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

      {/* <hr className={styles.myHr} /> */}

      <div className={`modal ${showPopUp && "is-active"}`}>
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
