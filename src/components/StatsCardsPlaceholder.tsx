import React from "react";

export default function StatsCardsPlaceholder() {
  return (
    <dl className="grid grid-cols-2 rounded-xl bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 md:grid-cols-4 md:divide-y-0 md:divide-x">
      {Array(4)
        .fill(0)
        .map((_, key: React.Key) => (
          <dd key={key} className="px-4 py-2 sm:px-4 sm:py-3 flex flex-col justify-center items-center lg:flex h-full">
            <div className="flex justify-between items-center text-gray-300 uppercase w-full">
              <h3 className="w-1/2 h-5 skeleton rounded"></h3>
              <div className="w-5 h-5 skeleton rounded"></div>
            </div>
            <div className="flex-1 text-center py-12">
              <span className="block skeleton rounded w-28 h-8 mb-4"></span>
              <span className="block skeleton rounded w-20 h-4 mx-auto"></span>
            </div>
            <div className="flex justify-between items-center w-full text-gray-600 text-sm">
              <span className="w-16 h-5 skeleton rounded"></span>
              <span className="w-16 h-5 skeleton rounded"></span>
            </div>
          </dd>
        ))}
    </dl>
  );
}
