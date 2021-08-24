const loginAndSIgnIn = () => {
  const [openLogin, setopenLogin] = useState(true);
  const [openSignIn, setopenSignIn] = useState(false);
  import { useState } from "react";
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
      {openLogin ? (
        <div className={styles.LoginForm}>
          <form>
            <p>login</p>
            <input />
            <input />
            <button>supmit</button>
            <button onClick={openSignInFunction}>careat new account</button>
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
    </>
  );
};
export default loginAndSIgnIn;
