import React, { useEffect, useState } from "react";
import SelectCountry from "../components/SelectCountry";
import StatsCards from "../components/StatsCards";
import StatsCardsPlaceholder from "../components/StatsCardsPlaceholder";
import Page from "../layouts/Page";
import ApiService from "../services/api.service";

const api = new ApiService();

export default function Insight() {
  const [options, setOptions] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState({ countries: true, stats: true });
  // const [selectedCountry, setSelectedCountry] = useState([]);

  const onCounterChange = (selected: any) => {
    // console.log(selected);
    const { latlng } = selected;
    if (!latlng) return;
    console.log("option: ", selected);

    setLoading(l => ({ ...l, stats: true }));
    api
      .fetchWeather(latlng[0], latlng[1])
      .then(res => {
        console.log("stats : ", res);
        setStats(res);
      })
      .finally(() => {
        setLoading(l => ({ ...l, stats: false }));
      });
  };

  const fetchData = async () => {
    try {
      const countries = await api.fetchAllCountries();
      const weather = await api.fetchWeather(-33, -56);
      setOptions(countries);
      setStats(weather);
      console.log(options);
      console.log(weather);
    } catch (error) {
      console.info(error);
    } finally {
      setLoading({ countries: false, stats: false });
    }
  };

  //
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Insights" actions={<SelectCountry options={options} onChange={onCounterChange} loading={loading.countries} />}>
      {loading.stats ? <StatsCardsPlaceholder /> : <StatsCards stats={stats} loading={loading.stats} />}
    </Page>
  );
}
