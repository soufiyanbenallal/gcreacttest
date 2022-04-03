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

export interface IHeaderPageProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
}

export interface IPageProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
  title?: React.ReactNode;
}

export interface IStatsCardsProps {
  stats: IStats;
}
export interface IStats {
  main?: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind?: {
    speed: number;
    deg: number;
  };
}

export interface IStatsItem {
  symbol: string;
  name: string;
  value: string | number | undefined;
  icon: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface IStatsCardItemProps {
  item: IStatsItem;
  title: string;
}

export interface ISelectCountryProps {
  options: any[];
  onChange: (val: any) => void;
  selectedCountry: {
    name: {
      common: string;
    };
  };
}
