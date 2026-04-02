import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="cursor-pointer bg-accent hover:bg-accent/70 py-3 px-6 rounded-xl text-black font-sans font-semibold">
      {children}
    </button>
  );
};
export const SecondaryButton = ({ children }) => {
  return (
    <button className="cursor-pointer bg-slate-800 hover:bg-slate-800/70 text-white py-3 px-6 rounded-xl font-sans font-semibold">
      {children}
    </button>
  );
};
