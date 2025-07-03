

import Image from "next/image";
import Herosec from "./components/Hero";
import StorySec from "./components/Story";
import ScrollSpy from "./components/ScrollSpy"
import FAQSection from "./components/FAQSection";
import ConferenceAgenda from "./components/agenda";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900" >
      <ScrollSpy/>

<Herosec /> 
<StorySec />
<ConferenceAgenda/>
<FAQSection />
<Footer/>




    </div>
  );
}
