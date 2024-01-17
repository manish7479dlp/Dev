import React from "react";
import imgLink from "../img/burger-1.png";

const Category = ({color}) => {
  return (
    <div className={`${color} flex rounded-lg overflow-hidden p-1 flex-1`}>
      <div className="basis-1/3 relative  ">
        <img
          className="w-36 absolute -left-6 -bottom-6"
          src={imgLink}
          alt="img"
        />
      </div>

      <div className="basis-2/3">
        <div className="space-y-1 mb-2">
          <h1 className="text-3xl font-bold">Food Hub</h1>
          <p className="text-sm text-slate-700">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <a className="text-black" href="#">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Category;
