import React from "react";

function DiscussionForum() {
  return (
    <div className="max-w-[1920px] mx-auto bg-white">
      <div className="grid grid-cols-12 p-6">
        <div className="col-span-5">
          <img
            src="images/png/question.png"
            className="h-[798px] w-[579px]"
            alt=""
          />
        </div>
        <div className="col-span-7">
          <div class="flex flex-col m-[110px] max-w-[570px] gap-[75px]">
            <h2 class="text-[#061C3D] font-Poppins font-bold text-[40px]">
              Discussion Forum
            </h2>

            <div class="flex flex-col gap-[51px]">
              <p className="text-[#061C3D] font-Poppins max-w-[777px] text-left text-[20px] font-medium">
                Welcome to our vibrant and diverse discussion forum, where
                knowledge meets community! Our forum is a bustling hub of
                activity, buzzing with passionate individuals eager to share
                insights, ask questions, and engage in meaningful conversations.
                Whether you're a seasoned expert in your field or a curious
                newcomer seeking guidance, you'll find a welcoming space here to
                explore, learn, and connect. Dive into our myriad of topics
                ranging from health and wellness to technology, arts, and
                beyond. Participate in lively debates, exchange valuable
                information, and forge connections with fellow enthusiasts from
                around the globe. Our forum is not just a platform for
                discussion; it's a vibrant community where ideas flourish, bonds
                are formed, and perspectives are broadened. Join us on this
                exciting journey of discovery, growth, and camaraderie.
                Together, let's embark on a quest for knowledge, enlightenment,
                and meaningful connections. Welcome aboard!
              </p>

              <div class="flex gap-2 mt-2">
                <button class="font-Poppins bg-[#2D429B] h-[34px] rounded-lg font-medium">
                  <span class="text-white py-[10px] px-[16px]">
                    Discussion Forum
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* {questions.map((question, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-medium text-black border-b border-[#E6E6E6]">
                <h2 className="">
                  {question.question}
                  <span className="flex justify-end w-full">
                    <span className="transition-all duration-100 ease-linear">
                      <img src="svg/up-arrow.svg" alt="" />
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default DiscussionForum;
