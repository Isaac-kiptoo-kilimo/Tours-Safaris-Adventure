import { useNavigate } from "react-router-dom";
import User1 from "../assets/headshots/user1.jpg";
import User2 from "../assets/headshots/user2.jpg";
import User3 from "../assets/headshots/user3.jpg";

const GetStarted = () => {
  const navigate=useNavigate();
  const handleContactNavigation=()=>{
    navigate('/contact')
  }
const handleSafariNavigation=()=>{
  navigate('/safaris')

}  
  return (
    <div className="py-16" id="getStarted">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="flex items-center justify-center -space-x-2">
          <img
            loading="lazy"
            width="220"
            height="220"
            src={User3}
            alt="member photo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src={User2}
            alt="member photo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src={User1}
            alt="member photo"
            className="z-10 h-16 w-16 rounded-full object-cover"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src={User2}
            alt="member photo"
            className="relative h-12 w-12 rounded-full object-cover"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src={User3}
            alt="member photo"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
        <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Get Started now
          </h1>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300">
            Be part of millions people around the world using African Grand Expeditions when it comes to Safaris
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
             onClick={handleSafariNavigation}
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Adventure Now
              </span>
            </a>
            <a
      onClick={handleContactNavigation}        
      className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
