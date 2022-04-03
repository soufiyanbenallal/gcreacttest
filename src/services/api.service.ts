import { IApiService } from "../interfaces";

export default class ApiService implements IApiService {
  // implements IApiService
  private apiKey: string = process.env.REACT_APP_API_KEY_WEATHER || "";
  private apiUrl: string = process.env.REACT_APP_API_URL_WEATHER || "";
  private apiUrlCountries: string = process.env.REACT_APP_API_COUNTRIES || "";

  // func: create get func for fetching data from api
  private async get(url: string, api = this.apiUrl): Promise<any> {
    const res = await window.fetch(`${api}/${url}`);

    return res.json();
  }

  // func: fetch all countries
  public fetchAllCountries = (): Promise<any> => {
    return this.get("", this.apiUrlCountries);
  };

  // func: fetch weather stats
  public fetchWeather = (lat: number, lon: number): Promise<any> => {
    return this.get(`weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
  };
}
