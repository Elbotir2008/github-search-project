import React from "react";

const page = () => {
  return (
    <div className="container p-[30px]">
      <input
        className="w-full p-3 outline-none border-2 rounded-md"
        type="text"
        placeholder="Search Users..."
      />
      <button className="w-full bg-[#333333] text-white py-2 rounded-md mt-5">
        Search
      </button>
    </div>
  );
};

export default page;
