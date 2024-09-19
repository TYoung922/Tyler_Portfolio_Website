import React from "react";

const ProjectTag = ({ name, onCLick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-green-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onCLick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
