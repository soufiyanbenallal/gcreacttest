import React from "react";
import { IAppContext, IApiService, IHelpersService } from "../interfaces";
import ApiService from "../services/api.service";
import HelpersService from "../services/helpers.service";

const helpers: IHelpersService = new HelpersService();
const api: IApiService = new ApiService();

export const AppContext = React.createContext<IAppContext>({ api, helpers });

export default function ProviderContext({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{ api, helpers }}>{children}</AppContext.Provider>;
}
