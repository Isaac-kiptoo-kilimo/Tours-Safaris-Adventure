import Hero from "./components/Hero";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Reviews from "./components/Reviews";
import Left from "./components/Left";
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
    </Layout>
  );
};

export default AboutUs;
