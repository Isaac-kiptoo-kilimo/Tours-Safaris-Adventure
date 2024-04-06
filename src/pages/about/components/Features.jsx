import React from "react";
import Tickets from "../assets/features/tickets.png";
import Cashout from "../assets/features/cashout.png";
import { FaBuromobelexperte } from "react-icons/fa6";
import { FaSafari } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="" id="features">
      <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
        <div>
          <h2 className="text-4xl font-bold text-yellow-500 md:text-5xl dark:text-white">
           Why African Grand Expeditions?
          </h2>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <div className="" style={{fontSize:"3em"}}>
            <FaBuromobelexperte />

            </div>

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-primary dark:text-white transition">
                Expert Advice
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Our sales consultants, many of whom are based in Africa, have firsthand experience of the lodges, parks, and safari routes. They offer personalized advice tailored to your preferences and requirements, ensuring that every aspect of your journey is meticulously planned. 
                
                  {" "}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Whether it's choosing accommodations, planning game drives, or deciding on the best places to visit, our consultants are there to assist you every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <div className="" style={{fontSize:"3em"}}>

            <GiLevelFourAdvanced />
</div>
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-primary dark:text-white transition ">
                Tailored Adventures
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Whether you're a wildlife enthusiast, a photography buff, or a nature lover seeking tranquility, we customize your safari experience to align with your interests.{" "}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                From thrilling encounters with the Big Five to intimate sunset vistas over the savannah, every moment is tailored to create memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <div className="" style={{fontSize:"3em"}}>

<FaSafari />
</div>

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-primary dark:text-white transition">
                World-Class Safari Guides
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Our guides are not just knowledgeable; they are passionate about the African wilderness. Rigorous selection processes ensure that only the most skilled and experienced guides are part of our team.{" "}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                With their expertise, you're guaranteed an insightful and safe journey through the vast landscapes of Africa.!
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <div className="" style={{fontSize:"3em"}}>

<FaRegCreditCard />
</div>

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-primary dark:text-white transition">
                Best Value for Money
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                While we provide top-notch service and experiences, we understand the importance of offering affordable options. We prioritize quality without compromising on cost-effectiveness.{" "}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                With Africa Grand Expeditions, you get the best value for your money, enjoying private safari game drives of exceptional quality at prices that suit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
