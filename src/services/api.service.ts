import { IApiService } from "../interfaces";

export default class ApiService implements IApiService {
  // implements IApiService
  private apiKey: string = process.env.REACT_APP_API_KEY_WEATHER || "";
  private apiUrl: string = process.env.REACT_APP_API_URL_WEATHER || "";
  private apiUrlCountries: string = process.env.REACT_APP_API_COUNTRIES || "";

  // constructor(apiUrl: string) {
  //   this.apiUrl = apiUrl;
  // }

  private async get(url: string, api = this.apiUrl): Promise<any> {
    const res = await window.fetch(`${api}/${url}`);

    return res.json();
  }

  private async post(url: string, params?: any, api = this.apiUrl): Promise<any> {
    const res = await fetch(`${api}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: params ? JSON.stringify(params) : undefined,
    });

    return res.json();
  }
  public fetchAllCountries = (): Promise<any> => {
    return this.get("", this.apiUrlCountries);
  };

  public fetchWeather = (lat: number, lon: number): Promise<any> => {
    return this.get(`weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
  };
}
