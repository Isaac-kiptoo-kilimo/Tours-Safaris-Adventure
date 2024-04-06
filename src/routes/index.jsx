import React,{ useState ,useEffect} from "react";
import { Route, Routes } from "react-router-dom";

// View routes
import Home from "../pages/home";
import AboutUs from "../pages/about";
import Tours from "../pages/tour";
import ContactUs from "../pages/contact";
import AboutKenya from "../pages/aboutKenya";
import InvoiceGenerator from "../pages/invoice";
import GuideFees from "../pages/guidefees";
import SafariScheduler from "../pages/safariScheduler";
import CarFees from "../pages/carfees";
import CustomLoader from "../pages/customLoaders";
import SingleTour from "../pages/tour/SingleTour";
import Destinations from "../pages/home/components/Destinations";


export default function AppRoutes() {

const[isLoading,setIsLoading]=useState(true)

useEffect(()=>{

const handleLoading=()=>{
setTimeout(()=>{
  setIsLoading(false)
},4000)

};
handleLoading()
},[])

  return (
  <div>
      { isLoading ? (
      <div>
      <CustomLoader />

     </div>
    ) :
    (<Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="about-kenya" element={<AboutKenya />} />
      <Route path="safaris" element={<Tours />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="invoice" element={<InvoiceGenerator />} />
      <Route path="carfees" element={<CarFees />} />
      <Route path="guidefees" element={<GuideFees />} />
      <Route path="schedule" element={<SafariScheduler />} />
      <Route path="tour/:tourId" element={<SingleTour />} />
      <Route path="destination/:name" element={<Destinations/>} />
    </Routes>)
}
  </div>
  );
}
