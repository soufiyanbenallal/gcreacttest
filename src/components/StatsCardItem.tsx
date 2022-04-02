import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { IAppContext, IHelpersService } from "../interfaces";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

export default function StatsCardItem({ item, title }: { item: any; title: string }) {
  const { helpers } = useContext<IAppContext>(AppContext);
  const { classNames }: IHelpersService = helpers;

  return (
    <div className="px-4 py-3 sm:px-4 sm:py-6">
      <dt className="text-base font-normal text-gray-500 uppercase pb-4">{title}</dt>
      <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
          {item.stat}
          <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
        </div>

        <div
          className={classNames(
            item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
            "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0",
          )}
        >
          {item.changeType === "increase" ? (
            <ArrowSmUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
          ) : (
            <ArrowSmDownIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
          )}

          <span className="sr-only">{item.changeType === "increase" ? "Increased" : "Decreased"} by</span>
          {item.change}
        </div>
      </dd>
    </div>
  );
}
