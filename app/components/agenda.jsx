"use client";

import Day1Timeline from "./TimeLine1";
import Day2Timeline from "./TimeLine2";
import Day3Timeline from "./TimeLine3";

export default function ConferenceAgenda() {
    return (
        <section id="agenda" className="bg-gray-900 text-white overflow-hidden">


            {/* Day 1 */}
            <div className="mt-1">
                <Day1Timeline />
            </div>

          

            {/* Day 2 */}
            <div>
                <Day2Timeline />
            </div>

           

            {/* Day 3 */}
            <div>
                <Day3Timeline/>
            </div>

       
        </section>
    );
}
