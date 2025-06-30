"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is MedRoots Summit 25?",
    answer:
      "It's an international IEEE SIGHT Conference held in Jordan, focusing on technology, sustainability, and biomedical innovation.",
  },
  {
    question: "Who can attend the summit?",
    answer:
      "Researchers, students, industry professionals, and anyone interested in tech, AI, healthcare, and environmental development.",
  },
  {
    question: "Where will the summit take place?",
    answer:
      "It will be held at the King Hussein Bin Talal Convention Center, Hilton Dead Sea Resort, Jordan.",
  },
  {
    question: "Is registration required?",
    answer:
      "Yes, registration is required to attend workshops, keynotes, and other sessions. Details are available on the official website.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4  bg-radial-[at_25%_25%] from-gray-900 from-1% to-blach text-xl  ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center text-[#f1f1f1] max-md:text-4xl backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          Frequently Asked Questions
        </h1>
        <div className="space-y-5 pt-10 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-gray-900 transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left text-xl font-medium"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>

              <div
                className={`px-5 overflow-hidden transition-all duration-1000 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
