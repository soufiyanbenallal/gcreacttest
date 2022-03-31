import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full relative -mt-32">
      <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">{children}</div>
      </div>
    </main>
  );
}
