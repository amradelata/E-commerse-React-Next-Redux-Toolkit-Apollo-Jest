import { Provider } from "react-redux";
import { store, persistor } from "../store";
import MainNavBar from "../components/MainNavBar";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
// import FourOhFour from "./404";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavBar />
        {/* <FourOhFour /> */}
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
