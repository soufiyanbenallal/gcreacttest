import React, { useContext, useEffect } from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { IAppContext, IHelpersService } from "../interfaces";
import { AppContext } from "../context/AppContext";
import StatsCardItem from "./StatsCardItem";
import { DirectionIcon, HumidityIcon, PressureIcon, TempretureIcon, WindIcon } from "./Icons";

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
  const { getDirection, classNames }: IHelpersService = helpers;
  const feelLike = <span className="text-gray-600 text-xs">feel like {stats.main.feels_like} °C</span>;
  const tempMinMax = (
    <div className="flex justify-between items-center w-full text-gray-600 text-sm">
      <span>Min {stats.main.temp_min}°C</span>
      <span>Max {stats.main.temp_max}°C</span>
    </div>
  );
  const wind = (
    <div className="flex justify-between items-center w-full text-gray-600 text-sm">
      <span className="text-gray-600 text-sm">{getDirection(stats.wind.deg)}</span>
      <span style={{ transform: `rotate(${stats.wind.deg - 40}deg)` }}>
        <DirectionIcon className="w-4 text-cyan-600" />
      </span>
    </div>
  );

  const statss = [
    {
      name: "Tempreture",
      value: stats.main.temp,
      body: feelLike,
      footer: tempMinMax,
      icon: <TempretureIcon />,
      symbol: "°C",
    },
    { name: "Wind", value: stats.wind.speed, footer: wind, change: "2.02%", icon: <WindIcon />, symbol: "m/s" },
    { name: "Humidity", value: stats.main.humidity, icon: <HumidityIcon />, symbol: "%" },
    { name: "Pressure", value: stats.main.pressure, icon: <PressureIcon />, symbol: "hPa" },
  ];
  useEffect(() => {
    // return () => {};
  }, []);
  return (
    <dl className="grid grid-cols-2 rounded-xl bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 md:grid-cols-4 md:divide-y-0 md:divide-x">
      {statss.map((item, index) => (
        <StatsCardItem key={index} item={item} title={item.name} />
      ))}
    </dl>
  );
}
