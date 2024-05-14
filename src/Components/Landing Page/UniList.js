import React from "react";
import "../css/UniList.css";
import { Link } from "react-router-dom";

function UniList() {
  const university = [
    {
      name: "Bahria Uni",
      designation: "Bahria Town",
      address: "Bahria Town",
      image: "./images/png/unii.png",
    },
    {
      name: "Comsats Uni",
      designation: "Comsats Lahore",
      address: "Rawaind Road",
      image: "./images/png/unii.png",
    },
    {
      name: "FAST Uni",
      designation: "Fast Lahore",
      address: "Faysal Town",
      image: "./images/png/unii.png",
    },
    {
      name: "LUMS Uni",
      designation: "Defence LAhore",
      address: "DHA",
      image: "./images/png/unii.png",
    },
    // Add other universities here
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-white">
      <div className="flex flex-col p-[4.5rem] 2xl:gap-[115px] xl:gap-[83px]">
        <div className="flex flex-col">
          <h2 className="text-[#3579F8] font-poppins font-medium text-[30px]">
            Top Universities
          </h2>
          <p className="text-[#000] max-w-[800px] font-poppins 2xl:text-[52px] font-semibold xl:text-[39px] xl:max-w-[630px]">
            Explore the prestigious{" "}
            <span className="text-[#3579F8] font-poppins font-semibold 2xl:text-[52px] xl:text-[39px]">
              universities that shape the future
            </span>
          </p>
        </div>

        <div className="flex overflow-scroll overflow-y-hidden gap-[14px]">
          {university.map((uni, index) => (
            <div
              key={index}
              className="min-w-[336px] flex flex-col items-center"
            >
              <div className="bg-[#7D92B5] border rounded-full 2xl:h-[278px] 2xl:w-[278px] lg:h-[250px] lg:w-[250px] items-center overflow-hidden flex justify-center">
                <img src={uni.image} alt="" />
              </div>
              <div className="pb-[23px]">
                <h2 className="text-[#000] text-[24px] font-poppins font-bold text-center">
                  {uni.name}
                </h2>
                <p className="text-[#464646] text-[22px] font-poppins font-normal">
                  {uni.designation}
                </p>
                <p className="text-[#8A8A8A] text-[20px] font-poppins font-normal text-center">
                  {uni.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="flex gap-2 mt-2 justify-center items-center">
        <button class="font-Poppins bg-[#2D429B] h-[34px] rounded-lg font-medium">
          <span class="text-white p-12">
            <Link to="/unifilter">Univeristy List</Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default UniList;
