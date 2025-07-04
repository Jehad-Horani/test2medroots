

import Image from "next/image";
import Herosec from "./components/Hero";
import StorySec from "./components/Story";
import ScrollSpy from "./components/ScrollSpy"
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import TicketSection from "./components/TicketSection";
import SpeakersSection from "./components/SpeakersSection";
import TopicsSection from "./components/TopicsSection";
import CombinedTimeline from "./components/CombinedTimelinesec";
import MobileTimeline from "./components/MobileTimeline";




  

export default function Home() {

  
  return (
    <div className="bg-gray-900 overflow-hidden" >
      <ScrollSpy/>

<Herosec /> 
<StorySec />
<SpeakersSection/>
<>
<CombinedTimeline/>
<MobileTimeline/>
</>
<TopicsSection/>
<TicketSection/>
<FAQSection />
<Footer/>

    </div>
  );
}
