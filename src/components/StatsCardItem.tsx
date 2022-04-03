import React from "react";
import { IStatsCardItemProps } from "../interfaces";

export default function StatsCardItem({ item, title }: IStatsCardItemProps) {
  return (
    <div className="px-4 py-2 sm:px-4 sm:py-3">
      <dd className="flex flex-col justify-center items-center lg:flex h-full">
        <div className="flex justify-between items-center text-gray-300 uppercase w-full">
          <h3>{title}</h3>
          {item.icon}
        </div>
        <div className="flex-1 text-center py-12">
          <span className="block text-3xl font-semibold text-cyan-600">
            {item.value} {item.symbol}
          </span>
          {item.body}
        </div>
        <div className="sticky top-full w-full">{item.footer}</div>
      </dd>
    </div>
  );
}
