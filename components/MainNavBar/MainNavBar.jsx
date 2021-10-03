import styles from "./MainNavBar.module.css";
import LoginAndSignPopup from "../LoginAndSignPopup";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getSearchProductsData } from "../../store/slices/products.slice";
import { logOut } from "../../store/slices/auth";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import ActiveLink from "../ActiveLink";
import Image from "next/image";

const MainNavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [togglePhoneNav, setTogglePhoneNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const router = useRouter();
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const CartSlice = useSelector((state) => state.CartSlice);

  const textInput = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (AuthSlice.isLogIn) {
      setShowPopUp(false);
      setToggleDropdown(false);
    }
  }, [AuthSlice.isLogIn]);

  const searchFunction = (e) => {
    const myValue = e.target.value.toLowerCase();
    if (e.keyCode === 13) {
      dispatch(getSearchProductsData(myValue));
      router.push(`/search?name=${myValue}`);
    }
  };
  const logOutFunction = () => {
    dispatch(logOut());
    setToggleDropdown(false);
    router.push("/");
  };
  const focusSearchInput = () => {
    setShowSearch(true);
    textInput.current.focus();
  };
  const unFocusSearchInput = (e) => {
    setShowSearch(false);
    textInput.current.value = "";
  };
  const openPhoneNave = () => {
    setTogglePhoneNav(!togglePhoneNav);
  };
  const OpnPopUp = () => {
    setShowPopUp(true);
  };
  const ClosePopUp = () => {
    setShowPopUp(false);
  };
  const toggleDropdownFunction = () => {
    setToggleDropdown(!toggleDropdown);
  };
  return (
    <>
      <nav className={`container is-fluid navbar ${styles.myNav}`}>
        <div>
          <ul className={styles.UL}>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a className={styles.myLink}>shopping</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/about">
                <a className={styles.myLink}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                activeClassName={styles.active}
                href="/countries-we-ship-to"
              >
                <a className={styles.myLink}>We ship to</a>
              </ActiveLink>
            </li>
            {AuthSlice.isLogIn && (
              <li>
                <ActiveLink activeClassName={styles.active} href="/profile">
                  <a className={styles.myLink}>Profile</a>
                </ActiveLink>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.logo}>
          <Link href="/" passHref>
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

            {AuthSlice.isLogIn && (
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
                  onClick={focusSearchInput}
                  className={` ${
                    showSearch ? styles.searchTextActive : styles.searchText
                  }`}
                  ref={textInput}
                  type="text"
                  placeholder="Search"
                />

                {showSearch ? (
                  <button
                    className={styles.searchBtn}
                    onClick={unFocusSearchInput}
                  >
                    <p>X</p>
                  </button>
                ) : (
                  <button
                    className={styles.searchBtn}
                    onClick={focusSearchInput}
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
              <div className={`dropdown ${toggleDropdown && "is-active"}`}>
                <div className="dropdown-trigger">
                  {AuthSlice.isLogIn ? (
                    <button
                      onClick={() => toggleDropdownFunction()}
                      className={styles.avatarBtn}
                    >
                      <p className={styles.userName}>
                        {AuthSlice.user.charAt(0)}
                      </p>
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleDropdownFunction()}
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
                    {AuthSlice.isLogIn && (
                      <div>
                        <Link href="/profile" passHref>
                          <div className={`dropdown-item ${styles.navItem}`}>
                            <a>
                              <p>Signed in as</p>
                              {AuthSlice.user.slice(0, 3)}
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
                      {!AuthSlice.isLogIn && (
                        <div className={`dropdown-item ${styles.navItem}`}>
                          <a>Log In</a>
                        </div>
                      )}
                    </a>
                    {AuthSlice.isLogIn && (
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
            {AuthSlice.isLogIn && (
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
