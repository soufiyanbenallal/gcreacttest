import React, { useEffect } from "react";
import StatsCards from "../components/StatsCards";
import Page from "../layouts/Page";
import ApiService from "../services/api.service";

const api = new ApiService();

export default function Insight() {
  useEffect(() => {
    api.fetchTemperature(-33, -56).then(res => {
      console.log("fetchTemperature");
      console.log(res);
    });
  }, []);
  return (
    <Page>
      <StatsCards />
    </Page>
  );
}
