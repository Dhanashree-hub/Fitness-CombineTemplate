import Hero from "../components/hero/Hero";

import FeaturedClass from "../components/featured-class/FeaturedClass";
import Trainers from "../components/trainers/Trainers";
import GymClass from "../components/GymClass";
import TimeSchedule from "../components/TimeSchedule";
import { Form } from "react-router-dom"
import PricingCards from "../components/pricing/PricingCards";

function Home() {
  return (
    <main>
      <Hero />
      <GymClass />
      <FeaturedClass />
      <Trainers />
      <TimeSchedule />
     <PricingCards />
    </main>
  );
}

export default Home;
