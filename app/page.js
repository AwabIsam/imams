/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Carusol from '@/components/carusol'
import Hero from '@/components/Hero'
import CredentialTestimonial from '@/components/CredentialTestimonial'
import "keen-slider/keen-slider.min.css";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Caruosel from "@/components/caruosel";
export default function Home() {
  return (
    <>
      <Landing/>
      <Caruosel/>
      <AboutMe/>
      {/* <CredentialTestimonial/> */}
      {/* <Services/> */}
    </>
  );
}
