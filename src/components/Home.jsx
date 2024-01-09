import React from "react";
import Button from "../layouts/Button";
import Navbar from "./Navbar.jsx";
import {useNavigate} from "react-router-dom";


const Home = () => {
    let navigate=useNavigate();

    return (

    <div className=" h-screen w-screen flex flex-row items-end  lg:px-32 px-5 bg-[url('./assets/img/main.jpg')] bg-center bg-contain bg-no-repeat bg-black">
        <div className="fixed top-0 left-0">
            <Navbar />
        </div>
        <div className="flex flex-row  justify-center items-center pb-7 bg-black w-screen ">
        <div className="flex flex-row justify-between gap-3 item-center ">
        <h1 className=" text-backgroundColor font-semibold text-3xl">
          Enjoy OurDelicious Meal
        </h1>
        <div className="w-10 h-10">
        <img src={"./assets/img/luch.png"} />
        </div>
        </div>
        <div className=" lg:pl-44">
            <a
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={()=>(navigate('/booking',{replace:true}))}
            ><Button title="Booking table" />
            </a>


        </div>
       </div>

    </div>
  );
};

export default Home;
