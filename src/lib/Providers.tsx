"use client"
import { store } from "@/redux/store";
import { Provider } from "react-redux";
// import StyledComponentsRegistry from "./AntRegistry";

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;