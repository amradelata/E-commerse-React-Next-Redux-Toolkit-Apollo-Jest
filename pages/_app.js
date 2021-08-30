import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Nav from "../components/my-nav";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import { FourOhFour } from "./404";
import FaceBookNav from "../components/FaceBookNav";
import NavParItem from "../components/NavParItem";
import DropdownMenu from "../components/DropdownMenu";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Nav />

        {/* <FaceBookNav>
          <NavParItem icon={<img src="/./icons/arrow.svg" />} />
          <NavParItem icon={<img src="/./icons/arrow.svg" />} />
          <NavParItem icon={<img src="/./icons/arrow.svg" />} />
          <NavParItem icon={<img src="/./icons/arrow.svg" />}>
            <DropdownMenu />
          </NavParItem>
        </FaceBookNav> */}

        <Component {...pageProps} />
        {/* <FourOhFour /> */}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
