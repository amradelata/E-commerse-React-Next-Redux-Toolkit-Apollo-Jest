import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import useUser from '../lib/useUser' ???????????????????????

const Profile = () => {
  // const { user } = useUser({ redirectTo: '/login' }) ????????????????????

  const authSlice = useSelector((state) => state.authSlice);
  const router = useRouter();

  useEffect(() => {
    if (!authSlice.isLoding) {
      {
        // redirectTo: "/signin";
        router.push("/signin");
        console.log("dsfasdfsdfa");
      }
    }
  }, []);
  return (
    <>
      <div className="container">
        {authSlice.isLoding ? <p>Profile</p> : <p>Sign Up</p>}
      </div>
    </>
  );
};

export default Profile;