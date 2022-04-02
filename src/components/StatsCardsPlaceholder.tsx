import React from "react";

export default function StatsCardsPlaceholder() {
  return (
    <dl className="grid grid-cols-2 rounded-xl bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 md:grid-cols-4 md:divide-y-0 md:divide-x">
      <dd className="px-4 py-2 sm:px-4 sm:py-3 flex flex-col justify-center items-center lg:flex h-full">
        <div className="flex justify-between items-center text-gray-300 uppercase w-full">
          <h3 className="w-1/2 h-5 skeleton"></h3>
          <div className="w-5 h-5 skeleton"></div>
        </div>
        <div className="flex-1 text-center py-12">
          <span className="block skeleton w-16 h-8"></span>
          <span className="block skeleton w-16 h-8"></span>
        </div>
        <div className="sticky top-full w-full skeleton"></div>
      </dd>
    </dl>
  );
}
