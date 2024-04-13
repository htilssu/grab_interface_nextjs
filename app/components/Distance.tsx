import React from "react";
import { CiClock2 } from "react-icons/ci";

interface DistanceProps {
  distance: { distance: string; time: string };
  className?: string;
}

const Distance = ({ distance, className }: DistanceProps) => {
  return (
    <div className={className}>
      <div className={"flex items-center text-base md:text-sm gap-2"}>
        <CiClock2 />
        <span>{distance.time}</span>
        <span>•</span>
        <span>{distance.distance}</span>
      </div>
    </div>
  );
};

export default Distance;
