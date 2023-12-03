import React from "react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 10, color }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={twMerge(
          "animate-spin rounded-full border-t-2 border-b-2",
          ` h-${size} w-${size}`,
          `${color ?? "border-white"} `
        )}
      ></div>
    </div>
  );
};
