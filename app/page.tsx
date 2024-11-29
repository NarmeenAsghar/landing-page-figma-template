import Apps from "@/components/Apps";
import Customized from "@/components/Customized";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import FreeTrail from "@/components/Free-trail";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
import Testimonial from "@/components/Testimonial";
import WorkManagement from "@/components/Work-management";
import WorkTogether from "@/components/Work-together";
import YourData from "@/components/Your-data";
import YourWork from "@/components/Your-work";

import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkManagement />
      <WorkTogether />
      <Extension />
      <Customized />
      <Pricing />
      <YourWork />
      <YourData />
      <Sponsors />
      <Apps />
      <Testimonial />
      <FreeTrail />
      <Footer />
    </div>
  );
}
