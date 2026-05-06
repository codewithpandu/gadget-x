import React from "react";
import { twMerge } from "tailwind-merge";

export const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "cursor-pointer bg-accent hover:bg-accent/70 text-background py-3 px-6 rounded-xl font-sans font-semibold",
        className,
      )}
    >
      {children}
    </button>
  );
};
export const SecondaryButton = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "cursor-pointer bg-slate-800 hover:bg-slate-800/70 text-white py-3 px-6 rounded-xl font-sans font-semibold",
        className,
      )}
    >
      {children}
    </button>
  );
};

export const SmallButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="cursor-pointer bg-slate-800 hover:bg-slate-800/70 text-white py-2 px-4 rounded-xl font-sans font-semibold text-xs focus:bg-accent"
    >
      {children}
    </button>
  );
};
