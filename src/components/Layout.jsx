import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="text-primary w-full max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
