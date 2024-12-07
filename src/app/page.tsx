"use client"

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Endingpage from "@/components/landing/Endingpage";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          toggleActions: "restart none none resume",
          start: "top center",
          markers: false,
          end: "bottom bottom",
        },
        ease: "power2.inOut",
      })
      .fromTo(
        "#lasagna",
        { opacity: 0, y: -100 },
        { opacity: 1, scale: 1, duration: 0.5, y: 0 }
      )
      .fromTo(
        "#finance",
        { opacity: 0, x: -100 },
        { opacity: 1, scale: 1, x: 0, duration: 0.5 }
      );
  }, []);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (isLargeScreen) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-1200",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "80% center",
            end: "bottom center",
            markers: false,
            scrub: true,
            pin: true,
          },
        }
      );

      return () => {
        {
          pin.kill();
        }
      };
    }
  }, []);

  return (
    <ReactLenis root>
      <main className="max-w-screen relative flex flex-col items-center p-10 pt-10">
        {/* nav */}
        <Navbar />
        {/* screen 1 */}
        <Hero />
        {/* screen 2 */}
        <Partners />

        <Endingpage />
      </main>
    </ReactLenis>
  );
};

export default Page;
