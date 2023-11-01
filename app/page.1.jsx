import axios from "axios";
import React from "react";

export const page = () => {
  const fetchUsers = async () => {
    try {
      let res = await axios.get(
        "https://api.github.com/users/sultonqulnd/repos"
      );
      let data = await res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  use;
  fetchUsers();
  return (
    <div className="container p-[30px] mx-auto">
      <input
        className="w-full p-3 outline-none border-2 rounded-md"
        type="text"
        placeholder="Search Users..."
      />
      <button className="w-full bg-[#333333] text-white py-2 rounded-md mt-5 hover:bg-white hover:text-[#333333] hover:transition-[0.3s] transition-[0.3s] border-2">
        Search
      </button>
    </div>
  );
};
