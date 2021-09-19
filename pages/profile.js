import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./profile.module.css";

const Profile = () => {
  const authSlice = useSelector((state) => state.authSlice);
  const router = useRouter();

  useEffect(() => {
    if (!authSlice.isLogIn) {
      {
        router.push("/");
      }
    }
  }, [authSlice.isLogIn, router]);
  return (
    <>
      <div>
        <div className={styles.parents}>
          <div className={styles.cover}></div>
          <div className={styles.userProfileImg}></div>
          <div className={styles.userProfileInfo}>
            <p className="is-size-1 has-text-weight-bold">{authSlice.user}</p>
            <p className="is-size-4 ">Front End Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
