import "./App.css";

import logo from "./assets/nifa-new-logo.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Carousel from "./components/carousel.component";
import banner1 from "./assets/1550551577home-banner1.jpg";
import banner2 from "./assets/1273170038home-banner2.jpg";
import banner3 from "./assets/1922909411home-banner3.jpg";
import banner4 from "./assets/1858311846home-banner4.jpg";
import banner5 from "./assets/1952342548home-banner5.jpg";
import playstore from "./assets/appstore.png";
import gpay from "./assets/gplay.png";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Art1 from "./assets/angel-2538427_1280.jpg";
import Art2 from "./assets/young-1861754_1280.jpg";
import Art3 from "./assets/paint-5699263_1280.jpg";
import Art4 from "./assets/color-splash-1852649_1280.jpg";
import Art5 from "./assets/break-1562275_1280.jpg";
import bg0 from './assets/sea-5429002_1280.jpg'

function App() {
  let slides = [banner1, banner2, banner3, banner4, banner5];

  return (
    <div className="App">
      <div className="flex containe flex-wrap text-white gap-2 sm:gap-8 justify-center text-base p-1  bg-gradient-to-r from-pink-800 to-pink-400 ">
        <p>Welcome to the National Institue of Fine Arts</p>
        <p className="flex gap-2 cursor-pointer">
          <IoCall className="mt-1" />
          9555112200
        </p>
        <p className="flex gap-2 cursor-pointer">
          <IoCall className="mt-1" />
          9810130552
        </p>
        <p className="flex gap-2 cursor-pointer">
          <IoMdMail className="mt-1" />
          admission@nifafinearts.com
        </p>
        <div className="flex gap-2 text-base mt-1 cursor-pointer">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />{" "}
        </div>
      </div>

      {/* navbar */}
      <nav className="flex gap-4 justify-center items-center">
        <img className="w-28" src={logo} alt="Logo" />

        <div className="flex gap-4 justify-center items-center max-xl:hidden sm:visible">
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Home
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            About Us
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Courses
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            {" "}
            Activities
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            {" "}
            Admission
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            {" "}
            ArtGallery
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Franchies
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Online Classes
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Videos
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Pay Fee
          </div>
          <div className=" cursor-pointer hover:text-fuchsia-700 hover:border-y-2 border-fuchsia-700 ">
            Contact
          </div>
        </div>
      </nav>
      <Dropdown />

      {/* Slider */}
      <div className="w-[100%] m-auto ">
        <Carousel slides={slides} />
      </div>

      {/* update */}
      <div className="flex flex-row justify-center sm:w-[80rem] p-3 m-auto font-semibold">
        <p className="">Nifa_Updates::</p>
        <marquee behavior="" direction="left" className="text-red-500">
          All NIFA courses are now available worldwide through our Live and
          Interactive Online Classes. Please download
        </marquee>
      </div>

      {/* content */}
      <div className="flex flex-wrap flex-col gap-3 p-1 sm:p-10 justify-center items-center m-auto sm:w-[80rem]">
        <h1 className=" sm:text-4xl font-bold">
          Welcome To National Institute of Fine Arts
        </h1>
        <p className="p-1 font-thin sm:font-normal p-3">
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>
        <p className="p-1 font-thin font-normal p-3">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>
        <p className="p-1 font-semibold">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Read More
        </button>
      </div>

      {/* Onlineclasses */}
      <div className="flex p-10 flex-wrap items-center bg-[url('./assets/sea-5429002_1280.jpg')]">
        <div className="w-80 m-auto">
          <h1 className="m-3 text-white text-left font-bold text-2xl">
            Online Classes
          </h1>
          <p className=" text-left font-light text-white">
            Dear Students/Parents, Nifa presents its Learning App for your
            regular art practice in which we have added many amazing features
            Like: Step-by-step recorded demo videos prepared by your faculty
            members. Regular assessment of your practise through assignment
            section. Live class section from same app. Attendance, payment
            invoice, art news, announcements, important information and direct
            connect with the management team are some more features. So hurry up
            n join now to experience personalised coaching by experts sitting at
            your home. We wish u Happy Learning. Stay Safe n Healthy.
          </p>

          <div>
              <button
                type="button"
                className="m-2 text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Read More
              </button>
            <h3 className=" text-white  font-semibold">Dowload the App</h3>
            <div className="flex flex-wrap flex-row gap-3 justify-center">
              <img className="sm:w-40  w-20 cursor-pointer" src={gpay} alt="" />
              <img
                className="sm:w-40  w-20 cursor-pointer"
                src={playstore}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="m-auto">
          <iframe
            className=" border-8 w-auto sm:w-[40rem] h-auto sm:h-[25rem]"
           
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* card */}
      <div className=" p-2 sm:p-5 bg-[url('./assets/paint-5699263_1280.jpg')]">
        <h1 className=" text-2xl font-bold m-6">Our Courses</h1>
        <div className="flex flex-wrap sm:w-[70rem] justify-center sm:flex-row m-auto container gap-1 sm:gap-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* studentwork */}
      <h1 className=" text-2xl font-bold m-6">Students Work</h1>

      <div className="flex flex-wrap gap-2 sm:p-16 p-2 ">
        <img className=" rounded-lg h-64" src={Art2} alt="" />
        <img className=" rounded-lg h-64" src={Art1} alt="" />
        <img className=" rounded-lg h-64" src={Art3} alt="" />
        <img className=" rounded-lg h-64" src={Art4} alt="" />
        <img className=" rounded-lg h-64" src={Art1} alt="" />
        <img className=" rounded-lg h-64" src={Art1} alt="" />
        <img className=" rounded-lg h-64" src={Art2} alt="" />
        <img className=" rounded-lg h-64" src={Art3} alt="" />
        <img className=" rounded-lg h-64" src={Art4} alt="" />
        <img className=" rounded-lg h-64" src={Art1} alt="" />
        <img className=" rounded-lg h-64" src={Art4} alt="" />
        <img className=" rounded-lg h-64" src={Art2} alt="" />
      </div>

      {/* Testimonial */}
      <div className="sm:p-8 bg-[url('./assets/angel-2538427_1280.jpg')]">
        <h1 className=" shadow-xl text-2xl font-bold sm:m-6">
          Student's Testimonial
        </h1>
        <div className="sm:m-auto ml-1 sm:w-[70rem] gap-2  sm:gap-4 flex flex-wrap">
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className=" border-4"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/VrGcY2k5zuc?si=4c-gxM-vLOIOZjjP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[url('./assets/bg3.jpg')]">
        <div className="flex flex-wrap gap-8 sm:pl-32 sm:pr-32 p-6 justify-between ">
          <div className="">
            <ul className=" text-left">
              <h2 className=" text-xl font-semibold m-2">Company</h2>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">About</li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Facilities
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Career
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Contact Us
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Terms & Conditions
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Refund Policy
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="">
            <ul className=" text-left">
              <h2 className=" text-xl font-semibold m-2">Company</h2>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">About</li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Facilities
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Career
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Contact Us
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Terms & Conditions
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Refund Policy
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="">
            <ul className=" text-left">
              <h2 className=" text-xl font-semibold m-2">Company</h2>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">About</li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Facilities
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Career
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Contact Us
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Terms & Conditions
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Refund Policy
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="">
            <ul className=" text-left">
              <h2 className=" text-xl font-semibold m-2">Company</h2>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">About</li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Facilities
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Career
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Contact Us
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Terms & Conditions
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Refund Policy
              </li>
              <li className=" cursor-pointer hover:text-fuchsia-700 ">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between sm:pl-32 sm:pr-32 p-10">
          <div className="">
            <h3>NIFA Is A Unit Of Nifaedutech Pvt Ltd. Connect With Us</h3>
            <p>9555112200,9810130552</p>
            <p className=" cursor-pointer">admission@nifafinearts.com</p>
            <div className="flex gap-6 text-3xl mt-4 cursor-pointer justify-center">
              <FaFacebook className=" bg-slate-50 border-4 rounded-full hover:text-blue-700" />
              <FaTwitter className=" bg-slate-50 border-4 rounded-full hover:text-blue-400" />
              <FaInstagram className=" bg-slate-50 border-4 rounded-full hover:text-yellow-600" />
              <FaYoutube className=" bg-slate-50 border-4 rounded-full hover:text-red-600" />{" "}
            </div>
          </div>
          <div>
            <div>
              <h3 className=" font-semibold">Dowload the App</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <img
                  className="sm:w-40  w-20 cursor-pointer"
                  src={gpay}
                  alt=""
                />
                <img
                  className="sm:w-40  w-20 cursor-pointer"
                  src={playstore}
                  alt=""
                />
              </div>
            </div>
            <div className=" font-light">
              © Copyright 2021 NIFA Fine Arts. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
