import React from "react";
import HeaderPage from "../components/HeaderPage";
import { IPageProps } from "../interfaces";

export default function Page({ children, actions, title }: IPageProps) {
  return (
    <main className="w-full relative ">
      <HeaderPage title={title} actions={actions} />
      <div className="-mt-24 max-w-7xl mx-auto relative z-10 pb-24 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        {children}
      </div>
    </main>
  );
}
