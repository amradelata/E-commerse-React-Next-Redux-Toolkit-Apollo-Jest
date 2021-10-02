import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./profile.module.css";

const Profile = () => {
  const AuthSlice = useSelector((state) => state.AuthSlice);
  const router = useRouter();

  useEffect(() => {
    if (!AuthSlice.isLogIn) {
      {
        router.push("/products/1");
      }
    }
  }, [AuthSlice.isLogIn, router]);
  return (
    <>
      {/* <div> */}
      <div className={styles.parents}>
        <div className={styles.cover}></div>
        <div className={styles.userProfileImg}></div>
        <div className={styles.userProfileInfo}>
          <p>{AuthSlice.user}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Profile;
