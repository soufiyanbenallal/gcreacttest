import React, { useContext, useEffect } from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { IAppContext, IHelpersService } from "../interfaces";
import { AppContext } from "../context/AppContext";
import StatsCardItem from "./StatsCardItem";

const statss = [
  { name: "Tempreture", stat: "71,897", previousStat: "70,946", change: "12%", changeType: "increase" },
  { name: "Wind", stat: "58.16%", previousStat: "56.14%", change: "2.02%", changeType: "increase" },
  { name: "Humidiy", stat: "24.57%", previousStat: "28.62%", change: "4.05%", changeType: "decrease" },
  { name: "Pressure", stat: "24.57%", previousStat: "28.62%", change: "4.05%", changeType: "decrease" },
];

export interface IStatsCardsProps {
  stats: any;
  loading: boolean;
}
export default function StatsCards({ stats, loading }: IStatsCardsProps) {
  const { helpers } = useContext<IAppContext>(AppContext);
  const { classNames }: IHelpersService = helpers;
  const statss = [
    { name: "Tempreture", stat: "71,897", previousStat: "70,946", change: "12%", changeType: "increase" },
    { name: "Wind", stat: "58.16%", previousStat: "56.14%", change: "2.02%", changeType: "increase" },
    { name: "Humidiy", stat: stats.main.humidity + "%", previousStat: "28.62%", change: "4.05%", changeType: "decrease" },
    { name: "Pressure", stat: stats.main.pressure + " hPa", previousStat: "28.62%", change: "4.05%", changeType: "decrease" },
  ];
  useEffect(() => {
    // return () => {};
  }, []);
  return (
    <dl className="grid grid-cols-2 rounded-xl bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 md:grid-cols-4 md:divide-y-0 md:divide-x">
      {statss.map((item, index) => (
        <StatsCardItem key={index} item={item} title={item.name} />
      ))}
      {/* <StatsCardItem item={{}} title="Tempreture" />
        <StatsCardItem item={stats.main || {}} title="Humidity" /> */}
    </dl>
  );
}
