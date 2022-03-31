export interface IApiService {
  fetchAllCountries: () => Promise<any>;
  fetchTemperature: (lat: number, lon: number) => Promise<any>;
}

export interface IHelpersService {
  classNames: (...val: string[]) => string;
}

export interface IAppContext extends IApiService, IHelpersService {}
