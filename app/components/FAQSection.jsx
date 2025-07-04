"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is MedRoots Summit 25?",
    answer:
      "MedRoots Summit 25 is an international IEEE SIGHT conference held in Jordan, focusing on technology, sustainability, biomedical innovation, and global health challenges.",
  },
  {
    question: "Who can attend the summit?",
    answer:
      "The summit welcomes students, researchers, professionals, and anyone passionate about AI, healthcare technologies, engineering, or sustainable development.",
  },
  {
    question: "Where will the summit take place?",
    answer:
      "The summit will be held at a hotel in Amman, Jordan.",
  },
  {
    question: "Is registration required?",
    answer:
      "Yes, registration is mandatory for attending keynotes, panel discussions, workshops, and other sessions. You can register through the official website.",
  },
  {
    question: "Will participants receive a certificate?",
    answer:
      "Yes, official attendance certificates will be provided to all registered participants who attend the full duration of the event.",
  },
  {
    question: "What languages will the summit be conducted in?",
    answer:
      "The summit will be primarily conducted in English. Some supportive materials or guidance may be offered in Arabic where necessary.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative text-white py-24 px-6 md:px-0">
      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-5xl font-bold mb-10 text-center text-[#f1f1f1] max-md:text-4xl backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5 pt-4 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-200 ${
                openIndex === index
                  ? "border-[#00ffd0] bg-gray-800/40"
                  : "border-gray-700"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left text-xl font-semibold text-white hover:text-[#00ffd0] transition-colors duration-300 cursor-pointer"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-[#00ffd0]" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400" />
                )}
              </button>

              <div
                className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 py-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
