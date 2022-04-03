import React, { useCallback, useContext, useEffect, useState } from "react";
import SelectCountry from "../components/SelectCountry";
import StatsCards from "../components/StatsCards";
import StatsCardsPlaceholder from "../components/StatsCardsPlaceholder";
import { AppContext } from "../context/AppContext";
import { IAppContext, IStats } from "../interfaces";
import Page from "../layouts/Page";

export default function Insight() {
  const [options, setOptions] = useState([]); // countries
  const [stats, setStats] = useState<IStats>({}); // stats data
  const [loading, setLoading] = useState({ countries: true, stats: true }); // loading states and countries
  const [selectedCountry, setSelectedCountry] = useState<any>({}); // selected country
  const { api } = useContext<IAppContext>(AppContext); // call api from context

  // --------------------------------------------------
  // handle country change:  fetch stats on selected country
  const onCounterChange = useCallback((selected: any) => {
    const { latlng } = selected; // extract latlng from selected country
    if (!latlng) return; // if no latlng, return
    setSelectedCountry(selected); // set selected country
    setLoading(l => ({ ...l, stats: true })); // set loading stats to true
    api
      .fetchWeather(latlng[0], latlng[1])
      .then(res => {
        res && setStats(res);
      })
      .finally(() => {
        setLoading(l => ({ ...l, stats: false }));
      });
  }, []);

  // --------------------------------------------------
  // fetch countries and stats on mount
  const fetchData = async () => {
    try {
      const countries = await api.fetchAllCountries();
      // set first country as default selected country
      const { latlng } = countries[0];
      const weather = await api.fetchWeather(latlng[0], latlng[1]);
      setSelectedCountry(countries[0]);
      setOptions(countries); // set countries from respense
      setStats(weather);
    } catch (error) {
      // TODO: handle error here
      console.info(error); // i have not toast or notification yet and the test didn't asked for it then i will do it later
    } finally {
      setLoading({ countries: false, stats: false }); // set loading states to false
    }
  };

  // --------------------------------------------------
  // render header tile with substitle
  const headerTitle = (
    <div>
      <h1 className="text-4xl font-bold text-white w-full mb-2">Insights</h1>
      <h6 className="text-gray-200">
        Current weather stats for {selectedCountry.name ? selectedCountry.name.common : ""} - last update :{" "}
        {new Date().toLocaleString("en-US")}
      </h6>
    </div>
  );

  // --------------------------------------------------
  // render action buttons
  const Actions = () => {
    if (loading.countries) {
      return (
        <>
          <h3 className="block  text-sm font-medium text-gray-100 max-w-xs w-full">Countries</h3>
          <div className="skeleton mr-2 h-10 w-full rounded-md overflow-hidden relative bg-gray-200 mt-1"></div>
        </>
      );
    }
    return <SelectCountry selectedCountry={selectedCountry} options={options} onChange={onCounterChange} />;
  };

  // fetch data no mounted
  useEffect(() => {
    fetchData();
  }, []);

  // render page
  return (
    <Page title={headerTitle} actions={<Actions />}>
      {loading.stats ? <StatsCardsPlaceholder /> : <StatsCards stats={stats} />}
    </Page>
  );
}
