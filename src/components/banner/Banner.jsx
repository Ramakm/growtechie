import "./banner.css";
import { yashodhanImg } from "../../assets";
import HexagonImage from "./HexagonImage";
import { useState } from "react";
import EventRegistrationModal from "./EventRegistrationModal";

const data = {
  title: "Weekly",
  subTitle: "Conference",
  description:
    "We do free webniar for all. All you need to do is register and book a seat. Every week we will have a session from our leaders and other indurstry experts to clear your tech career doubts for free.",
  buttonText: "Register now",
  image1Src: "https://avatars.githubusercontent.com/u/8182816?v=4",
  image1Alt: "Ramakrushna Mohapatra",
  image2Src: yashodhanImg,
  image2Alt: "Yashodhan Gandage",
};

const Banner = () => {
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);

  return (
    <div className="reveal banner-box-shadow relative mx-auto gradient-bg overflow-hidden text-white p-5 flex justify-around gap-5">
      <div className="z-[10]">
        <h3 className="text-4xl lg:text-7xl font-bold text-gradient mb-4">
          {data.title}
          <br />
          <span className="text-3xl lg:text-6xl text-white">
            {data.subTitle}
          </span>
        </h3>
        <p className="max-w-[35ch] first-line:lg:max-w-[50ch]">
          {data.description}
        </p>
        <button
          className="hover:scale-110 transition-all px-5 py-2 mt-4 rounded-md bg-[var(--moonstone-blue)] text-white font-bold shadow-lg"
          onClick={() => setOpenRegistrationForm(true)}
        >
          {data.buttonText}
        </button>
      </div>

      <div className="absolute top-0 left-[50%] rotate-[50deg] w-[600px] h-[600px] border-[20px]  border-[var(--moonstone-blue)] border-solid"></div>
      <div className="absolute top-0 -left-[30%] rotate-[30deg] w-[400px] h-[400px] border-[20px] border-[var(--moonstone-blue)] border-solid hidden md:block"></div>

      <div className="z-[10] hidden md:flex">
        <div className="flex -mr-40">
          <HexagonImage src={data.image1Src} alt={data.image1Alt} />
          <div className="clip-hexagon hidden lg:block w-40 bg-[#453f3f] h-40"></div>
        </div>
        <div className="flex mt-[120px] -ml-20">
          <div className="clip-hexagon hidden lg:block w-40 bg-[var(--moonstone-blue)] h-40"></div>
          <HexagonImage src={data.image2Src} alt={data.image2Alt} />
        </div>
      </div>
      {openRegistrationForm && <EventRegistrationModal
        open={openRegistrationForm}
        handleClose={() => setOpenRegistrationForm(false)}
      />}
    </div>
  );
};

export default Banner;
