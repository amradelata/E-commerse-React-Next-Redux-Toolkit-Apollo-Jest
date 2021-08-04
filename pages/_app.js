import { Provider } from "react-redux";
import store from "../store";
import Nav from "../components/my-nav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
