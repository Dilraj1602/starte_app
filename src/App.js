import React from "react";
import reviews from "./data";
import Cards from "./Componenet/Cards";
const App = () => {
  return <div className="flex flex-col justify-center items-center bg-gray-200 w-[100vw] h-[100vh]">
    <div className="text-center">
    <h1 className="font-bold text-4xl ">Our Testimonials</h1>
    <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
    <Cards  reviews={reviews}></Cards>
    </div>
  </div>;
};

export default App;
