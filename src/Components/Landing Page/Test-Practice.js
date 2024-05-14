function TestPractice() {
  return (
    <>
      <div className="bg-[#EAF1FF] w-full flex 2xl:mt-[157px] xl:mt-[4px] max-w-[1920px] mx-auto">
        <div className="pl-[58px]">
          <img className="w-[574px]" src="svg/phone.svg" alt="" />
        </div>

        <div className="flex flex-col m-[110px] max-w-[570px] gap-[75px]">
          <h2 className="text-[#061C3D] font-Poppins font-bold text-[40px]">
            Test Practice Section
          </h2>

          <div className="flex flex-col gap-[51px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-poppins text-2xl font-semibold">
                Explore and Hone Your Text Editing Skills
              </h2>
              <p className="text-[#000] text-sm">
                Welcome to our text practice section! Here, you can explore the
                various features and capabilities of our platform. Whether
                you're looking to enhance your typing skills, improve your
                formatting techniques, or simply get familiar with the layout,
                this is the perfect place to do so. Feel free to experiment with
                different text styles, sizes, and alignments. Practice makes
                perfect, so dive in and start honing your text editing abilities
                today!
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-poppins text-2xl font-semibold">
                Master Your Digital Communication Skills
              </h2>
              <p className="text-[#000] text-sm">
                Welcome to our digital communication practice section! Here, you
                have the opportunity to refine your skills in effective online
                communication. Whether you're aiming to polish your email
                writing, perfect your messaging etiquette, or enhance your
                social media communication, this platform offers the perfect
                environment. Explore the intricacies of digital communication,
                from crafting engaging emails to navigating online conversations
                with finesse. Embrace the chance to become a proficient
                communicator in the digital realm and start mastering your
                digital communication skills today!
              </p>
            </div>

            <div class="flex gap-2 mt-2 justify-center">
              <button class="font-Poppins bg-[#2D429B] h-[47px] w-[114px]  rounded-lg font-medium">
                <span class="text-white text-base py-[10px] px-[16px]">
                  Test
                </span>
              </button>
            </div>

            {/* <div className="flex justify-end gap-4 pt-[60px]">
              <button className="bg-[#000] rounded-lg py-[4px] px-[12px]">
                <span className="flex">
                  <img src="assets/svg/apple.svg" alt="" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#E7E7E7] text-sm font-normal">
                      Download on the
                    </p>
                    <p className="text-[#E7E7E7] text-lg font-semibold">
                      Apple Store
                    </p>
                  </div>
                </span>
              </button>

              <button className="bg-[#000] rounded-lg py-[4px] px-[12px]">
                <span className="flex">
                  <img src="assets/svg/playstore.svg" alt="" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#E7E7E7] text-sm font-normal">
                      Download on the
                    </p>
                    <p className="text-[#E7E7E7] text-lg font-semibold">
                      Play Store
                    </p>
                  </div>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPractice;
