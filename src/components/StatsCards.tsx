import React, { useContext } from "react";
import { IAppContext, IHelpersService, IStatsCardsProps, IStatsItem } from "../interfaces";
import { AppContext } from "../context/AppContext";
import StatsCardItem from "./StatsCardItem";
import { DirectionIcon, HumidityIcon, PressureIcon, TempretureIcon, WindIcon } from "./Icons";

export default function StatsCards({ stats }: IStatsCardsProps) {
  const { helpers } = useContext<IAppContext>(AppContext); // call helpers from context
  const { getDirection }: IHelpersService = helpers; // Fun: get direction from degrees

  // ----------------------------------------
  // Render feel like for temperature
  const feelLike = <span className="text-gray-500 text-xs">feel like {stats.main?.feels_like} °C</span>;

  // render min and max for temperature
  const tempMinMax = (
    <div className="flex justify-between items-center w-full text-gray-500 text-sm">
      <span>Min {stats.main?.temp_min || 0}°C</span>
      <span>Max {stats.main?.temp_max || 0}°C</span>
    </div>
  );

  // ----------------------------------------
  // Render wind speed and direction
  const wind = (
    <div className="flex justify-between items-center w-full text-gray-500 text-sm">
      <span className="text-gray-500 text-sm">{getDirection(stats.wind?.deg || 0)}</span>
      <span style={{ transform: `rotate(${(stats.wind?.deg || 0) - 40}deg)` }}>
        <DirectionIcon className="w-4 text-cyan-600" />
      </span>
    </div>
  );

  // ----------------------------------------
  // set data depending on weather type
  const statsData: IStatsItem[] = [
    {
      name: "Tempreture", // card title
      value: stats.main?.temp, // value of stats
      body: feelLike, // body data : type { react elements }
      footer: tempMinMax, // footer data : type { react elements }
      icon: <TempretureIcon />, // icon : type { react elements }
      symbol: "°C", // symbol of stats value
    },
    { name: "Wind", value: stats.wind?.speed, footer: wind, icon: <WindIcon />, symbol: "m/s" },
    { name: "Humidity", value: stats.main?.humidity, icon: <HumidityIcon />, symbol: "%" },
    { name: "Pressure", value: ((stats.main?.pressure || 0) / 10).toFixed(1), icon: <PressureIcon />, symbol: "kPa" },
  ];

  // ----------------------------------------
  // Render stats cards
  return (
    <dl className="grid grid-cols-2 rounded-xl bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 md:grid-cols-4 md:divide-y-0 md:divide-x">
      {statsData.map((item: IStatsItem, index: React.Key) => (
        <StatsCardItem key={index} item={item} title={item.name} />
      ))}
    </dl>
  );
}
