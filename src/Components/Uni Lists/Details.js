import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  console.log("location", location);
  const uni = location.state ? location.state.uni : null;
  console.log("uni list", uni);

  console.log("uni", uni);

  const diseases = [
    {
      symptoms: "Allergy Symptoms",
    },
    {
      symptoms: "Back Pain",
    },
    {
      symptoms: "Cold or Flu",
    },
    {
      symptoms: "Red Eye",
    },
    {
      symptoms: "Birth Control",
    },
    {
      symptoms: "Hypertension",
    },
    {
      symptoms: "Specialist Referral",
    },
    {
      symptoms: "Diabetes",
    },
    {
      symptoms: "Medication Refill",
    },
    {
      symptoms: "Skin Rash",
    },
  ];

  const healthTypes = [
    {
      health: "Child Health",
    },
    {
      health: "Mental Health",
    },
    {
      health: "Womens Health",
    },
    {
      health: "Diet & Fitness",
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src="./images/png/header.png"
          alt="University"
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold">{uni.fee}</h2>
          {/* Display other details like location here */}
          {/* Example: <p className="text-lg">{uni.location}</p> */}
        </div>
      </div>
      <div className="flex flex-col max-w-[1920px] mx-auto h-[1080px] w-full pt-[75px] gap-[74px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="title-font">It’s time to invest in your people</h2>
          <p className="font-poppins text-[22px] font-normal max-w-[800px] text-center">
            River Health provides quality and comprehensive primary and mental
            healthcare directly to your employees.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            {diseases.map((disease, index) => (
              <div
                key={index}
                className="flex flex-col font-poppins text-[20px] font-semibold p-2"
              >
                <p className="text-[#3776E7]">{disease.symptoms}</p>
              </div>
            ))}
          </div>
          <div className="col-span-7 bg-[#F9F9F9] flex justify-center pl-[88px] flex-col">
            <div className="flex flex-col p-[20px] gap-5">
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-2">
                  <img src="assets/svg/blue-circle.svg" alt="" />
                  <h2 className="font-poppins text-[36px] font-medium">
                    Primary Care
                  </h2>
                </div>
                <p className="text-[#6D6D6D] font-poppins font-normal text-lg pl-[31px]">
                  Ideal for preventive care
                </p>
                <div className="flex gap-1 pl-[31px]">
                  <button className="bg-[#3579F8] py-[12px] 2xl:px-[16px] xl:px-[8px] rounded-full">
                    <span className="text-white">Book an Appointment</span>
                  </button>
                  <button className="border-[#000] border-2 py-[12px] px-[16px] rounded-full">
                    <span className="font-poppins">Learn More</span>
                  </button>
                </div>
                <p className="text-[#353535] font-normal text-sm pl-[50px]">
                  Next Today 4:40 PM
                </p>
              </div>
              <div className="pt-[50px] flex flex-col gap-[3rem]">
                {healthTypes.map((type, index) => (
                  <h2
                    key={index}
                    className="text-[#353535] font-poppins 2xl:text-4xl xl:text-3xl font-medium"
                  >
                    {type.health}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
