import type { AppProps } from "next/app";
import "../styles/globals.css";
import store from "../Store/store";
import { Provider } from "react-redux";
import Notifications from "../Components/Notification/Notifications";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Notifications />
      <Component {...pageProps} />
    </Provider>
  );
}
