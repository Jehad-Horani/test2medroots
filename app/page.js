

import Image from "next/image";
import Herosec from "./components/Hero";
import StorySec from "./components/Story";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div >

<Herosec /> 
<StorySec />
<FAQSection />





    </div>
  );
}
