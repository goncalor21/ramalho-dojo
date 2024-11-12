import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import GRHead from "@/src/GRHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <GRHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
