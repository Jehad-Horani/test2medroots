"use client";
import { useState, useMemo } from "react";
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
  const lines = useMemo(
    () =>
      Array.from({ length: 10 }, () => ({
        x1: `${Math.random() * 100}%`,
        x2: `${Math.random() * 100}%`,
      })),
    []
  );
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        cx: `${Math.random() * 100}%`,
        cy: `${Math.random() * 100}%`,
      })),
    []
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative text-white  p-20 px-0 text-xl">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffcc" />
            <stop offset="100%" stopColor="#196B40" />
          </linearGradient>
        </defs>
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1="0"
            x2={line.x2}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            strokeDasharray="5 10"
          />
        ))}
        {stars.map((star, i) => (
          <circle
            key={`star-${i}`}
            cx={star.cx}
            cy={star.cy}
            r="1.5"
            fill="#00ffcc"
          />
        ))}
      </svg>

      <div className="relative max-w-4xl mx-auto  z-10">
        <h1 className="text-5xl font-bold mb-10 text-center text-[#f1f1f1] max-md:text-4xl backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          Frequently Asked Questions
        </h1>
        <div className="space-y-5 pt-4 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl transition-all duration-200"
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
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
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
