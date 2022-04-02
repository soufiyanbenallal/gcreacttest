import React from "react";

export default function HeaderPage({ actions, title }: { actions?: any; title?: string }) {
  return (
    <header className="bg-white">
      {/* Header */}
      <div className="relative pb-24 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://as1.ftcdn.net/v2/jpg/02/11/52/42/1000_F_211524227_Ett8aboQvVnROAFtqu3S1pW99Y3Th9vm.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="flex justify-between items-center relative max-w-7xl mx-auto py-14 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold text-white w-full">{title}</h1>
            <h6 className="text-gray-200">Current weather stats for Urugay - last update : {new Date().toLocaleDateString()}</h6>
          </div>
          <div className="w-full max-w-xs">{actions}</div>
        </div>
      </div>
    </header>
  );
}
