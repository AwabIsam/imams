/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Carusol from "@/components/carusol";
import HeroSlider from "@/components/HeroSlider";
import CredentialTestimonial from "@/components/CredentialTestimonial";
import "keen-slider/keen-slider.min.css";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Map from "@/components/map";

import Caruosel from "@/components/caruosel";
export default function Home() {
  return (
    <>
      <Landing/>
      <Caruosel/>
      <AboutMe/>
      <Map/>
      <Footer/>
      {/* <CredentialTestimonial/> */}
      {/* <Services/> */}
    </>
  );
}
