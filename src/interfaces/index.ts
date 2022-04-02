export interface IApiService {
  fetchAllCountries: () => Promise<any>;
  fetchWeather: (lat: number, lon: number) => Promise<any>;
}

export interface IHelpersService {
  classNames: (...val: string[]) => string;
}

export interface IAppContext {
  api: IApiService;
  helpers: IHelpersService;
}
