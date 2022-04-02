export interface IApiService {
  fetchAllCountries: () => Promise<any>;
  fetchWeather: (lat: number, lon: number) => Promise<any>;
}

export interface IHelpersService {
  classNames: (...val: string[]) => string;
  getDirection: (angle: number) => string;
}

export interface IAppContext {
  api: IApiService;
  helpers: IHelpersService;
}
