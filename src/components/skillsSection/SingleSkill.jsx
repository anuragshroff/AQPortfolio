import React from "react";

const SingleSkill = ({ text, imgSvg, color }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg dark:hover:bg-gray-800">
      <div className={`text-4xl md:text-5xl ${color || "text-gray-700"}`}>
        {imgSvg}
      </div>
      <p className="text-center mt-3 text-sm md:text-base font-medium">{text}</p>
    </div>
  );
};

export default SingleSkill;