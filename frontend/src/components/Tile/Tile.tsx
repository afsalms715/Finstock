import React from "react";

type Props = {
    title:string;
    value:string|undefined;
};

const Tile = ({title,value}: Props) => {
  return (
    <div className="w-60 h-14 text-center shadow-md m-2">
      <span className="text-sm font-semibold ">{title}</span>
      <br />
      <span className="text-gray-500">{value}</span>
    </div>
  );
};

export default Tile;
