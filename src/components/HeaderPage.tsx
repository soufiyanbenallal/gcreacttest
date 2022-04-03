import React from "react";
import HeaderBg from "../assets/img/header-bg.jpg";
import { IHeaderPageProps } from "../interfaces";
export default function HeaderPage({ actions, title }: IHeaderPageProps) {
  return (
    <header className="bg-white">
      {/* Header */}
      <div className="relative pb-24 bg-gray-800">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={HeaderBg} alt="weather app header background" />
          <div className="absolute inset-0 bg-cyan-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="md:flex justify-between items-center relative max-w-7xl mx-auto py-14 px-4 md:py-20 sm:px-6 lg:px-8">
          {title}
          <div className="w-full md:max-w-xs mt-8">{actions}</div>
        </div>
      </div>
    </header>
  );
}
