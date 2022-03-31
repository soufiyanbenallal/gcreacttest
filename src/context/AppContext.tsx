import React from "react";
import { IAppContext } from "../interfaces";
import ApiService from "../services/api.service";
import HelpersService from "../services/helpers.service";

const helpers = new HelpersService();
const api = new ApiService();

export const AppContext = React.createContext<any>({ ...helpers, ...api });

export default function ProviderContext({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{ ...helpers, ...api }}>{children}</AppContext.Provider>;
}
