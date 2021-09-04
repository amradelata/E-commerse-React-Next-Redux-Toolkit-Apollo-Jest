import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./profile.module.css";
// import useUser from '../lib/useUser' ???????????????????????

const Profile = () => {
  // const { user } = useUser({ redirectTo: '/login' }) ????????????????????

  const authSlice = useSelector((state) => state.authSlice);

  const [openSignIn, setopenSignIn] = useState(false);

  useEffect(() => {
    // document.getElementById("signIn").style.display = "none";
    // document.getElementById("dropdown-content").style.display = "none";
  }, [authSlice.isLogIn]);
  return (
    <>
      {/* className="container is-fluid" */}
      <div>
        <div className={styles.dad}>
          <div className={styles.cover}></div>
          <div className={styles.userProfileImg}></div>
          <div className={styles.userProfileInfo}>
            <p className="is-size-1 has-text-weight-bold">{authSlice.user}</p>
            <p className="is-size-4 ">Front End Developer</p>
            <div className={styles.icons}>
              <img src="/./icons/avatar.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
              <img src="/./icons/cart.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
              <img src="/./icons/delete.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
