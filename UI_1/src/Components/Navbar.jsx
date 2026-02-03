import React from "react";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3">
        <div className="">
          <img
            className="h-15 w-20 object-cover "
            src="https://i.pinimg.com/originals/87/79/51/877951b20ab64005a25e03c6f7cfeaca.png"
            alt=""
          />
        </div>
        <div className="gap-10 flex font-bold">
          <a href="">Menu</a>
          <a href="">Location</a>
          <a href="">About</a>
          <a href="">Contact us</a>
        </div>
        <button className="px-2 py-1 bg-red-600 text-white font-bold ">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
