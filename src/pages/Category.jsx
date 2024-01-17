import React from "react";
import imgLink from "../img/burger-1.png";

const Category = ({color}) => {
  return (
    <div className="container py-16 flex flex-col gap-5 md:flex-row md:gap-10">
        {/* card1  */}

        <div className="bg-yellow-500 rounded-md flex p-2 overflow-hidden flex-1">
          <div className="relative basis-2/5">
            <img src={imgLink} alt="ing" className="w-20 h-20 absolute -left-3 -bottom-4"/>
          </div>
          <div>
            
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Web Developer</h1>
            <p className="text-sm text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, officia?</p>
          </div>
             <a href="#" className="text-black">Learn More</a>
          </div>
        </div>

        {/* card1  */}

        <div className="bg-green-500 rounded-md flex p-2 overflow-hidden flex-1">
          <div className="relative basis-2/5">
            <img src={imgLink} alt="ing" className="w-20 h-20 absolute -left-3 -bottom-4"/>
          </div>
          <div>
            
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Web Developer</h1>
            <p className="text-sm text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, officia?</p>
          </div>
             <a href="#" className="text-black">Learn More</a>
          </div>
        </div>

        {/* card1  */}

        <div className="bg-pink-500 rounded-md flex p-2 overflow-hidden flex-1">
          <div className="relative basis-2/5">
            <img src={imgLink} alt="ing" className="w-20 h-20 absolute -left-3 -bottom-4"/>
          </div>
          <div>
            
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Web Developer</h1>
            <p className="text-sm text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, officia?</p>
          </div>
             <a href="#" className="text-black">Learn More</a>
          </div>
        </div>
    </div>
  );
};

export default Category;
