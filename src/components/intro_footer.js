import React from "react";
import intro1 from "../images/intro1.jpeg";
import intro2 from "../images/intro2.jpeg";
import intro3 from "../images/intro3.jpeg";
import intro4 from "../images/intro4.jpeg";


const IntroFooter = () => {

  return (
    <div className="bg-black w-full h-auto flex flex-col">
      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
        <div data-aos="fade-right" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">Track food, fitness & fasting!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Tracking calories and macros is easy with our barcode scanner and device integration..</h1>
        </div>
        <div data-aos="fade-left">
          <img src={intro1} alt="loading" className="w-96 h-auto"/>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
      <div data-aos="fade-right">
          <img src={intro3} alt="loading" className="w-96 h-auto"/>
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">Learn what works!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Personalized nutrition insights reveal what's working so you can make smarter choices.</h1>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
        <div data-aos="fade-right" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">Change your habits and reach your goals!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Now you have the tools and knowledge to build healthy habits for life..</h1>
        </div>
        <div data-aos="fade-left">
          <img src={intro2} alt="loading" className="w-96 h-auto"/>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
      <div data-aos="fade-right">
          <img src={intro4} alt="loading" className="w-96 h-auto"/>
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold"> Start your journey Now!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Don't Miss Out! Secure Your Fitness Slot and Shine Bright! </h1>
        </div>
      </div>


    </div>
  );
};

export default IntroFooter;
