import type { AppProps } from "next/app";
import "../styles/globals.css";
import store from "../Store/store";
import { Provider } from "react-redux";
import Notifications from "../Components/Notification/Notifications";
import { AuthenticationContextProvider } from "../Store/Authentication-context";
import Auth from "../Components/Authentication/Auth";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthenticationContextProvider>
        <Notifications />
        <Component {...pageProps} />
        <Auth />
      </AuthenticationContextProvider>
    </Provider>
  );
}
