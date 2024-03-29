import CourseForm from "./CourseForm";
import { useState } from "react";

const CourseHero = ({ title, subtitle, imagelink }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="relative h-80 radial-shiny-gray-gradient text-white">
      <div className="h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-5xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-2xl font-medium mb-4">{subtitle}</p>
      </div>
      <div className="z-50 hidden lg:block lg:w-1/4 absolute top-1/3 lg:top-2/3 right-0 lg:right-10 mt-8 lg:mt-0">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={imagelink}
            alt="Course Image"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-full"
            onClick={() => setOpenForm(true)}
          >
            Register
          </button>
        </div>
      </div>
      <CourseForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        courseName={title}
      />
    </div>
  );
};

export default CourseHero;
