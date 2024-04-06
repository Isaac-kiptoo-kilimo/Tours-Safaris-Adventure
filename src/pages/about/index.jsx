import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import Left from "./components/Left";
import Right from "./components/Right";
import Layout from "../../global";

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <Hero />
      <Left />
      {/* <Right /> */}
      <Features />
      <Reviews />
      <GetStarted />
      {/* <Partners /> */}
    </Layout>
  );
};

export default AboutUs;
