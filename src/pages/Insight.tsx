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
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const onCounterChange = (selected: any) => {
    console.log(selected);
    setSelectedCountry(selected);
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
      setLoading(false);
    }
  };

  //
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Insights" actions={<SelectCountry options={options} onChange={onCounterChange} loading={loading} />}>
      {loading ? <StatsCardsPlaceholder /> : <StatsCards stats={stats} loading={loading} />}
    </Page>
  );
}
