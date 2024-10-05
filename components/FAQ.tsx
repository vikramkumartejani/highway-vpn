"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: "Does your VPN have the lowest latency?",
    answer:
      "Out of all the largest and most popular VPN providers, we have conducted thorough tests and are confident that our service has the average lowest latency for gaming and general use.",
  },
  {
    question: "Why would I need a VPN while gaming?",
    answer:
      "A VPN can help reduce lag, protect your privacy, and bypass geo-restrictions while gaming, enhancing your overall gaming experience.",
  },
  {
    question: "How can I contact you and request support?",
    answer:
      "You can reach us via email at support@example.com or through our live chat feature available on our website.",
  },
];

const FAQ = () => {
  // Change activeIndex to an array
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);

  // Modify toggleFAQ to add/remove index from activeIndices
  const toggleFAQ = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter(i => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="w-full py-[60px] pb-[148px] md:pt-[180px] lg:px-[84px] md:px-[34px] px-[15px]">
      <div className="w-full max-w-[896px] mx-auto">
        <h1 className="uppercase text-[#111111] text-[30px] md:text-[48px] sm:leading-[58px] font-semibold max-w-[560px] mx-auto text-center">
          Frequently Asked Questions
        </h1>
        <div className="mt-10 flex flex-col gap-6">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-white customshadow px-4 md:px-8 py-5 md:py-8 rounded-[22px] border border-[#11111138]"
            >
              <div className="flex items-center gap-3 justify-between">
                <h2 className="text-[#111111] text-[18px] sm:text-[24px] sm:leading-[24px] font-semibold">
                  {faq.question}
                </h2>
                <div>
                  <button onClick={() => toggleFAQ(index)}>
                    <Image
                      src="/arrow-up.svg"
                      alt="arrow"
                      width={26}
                      height={26}
                      className={`transition-all duration-300 ease-in-out ${
                        activeIndices.includes(index) && "rotate-[180deg]"
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  activeIndices.includes(index) ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="pt-2 sm:pt-4 text-[#333333] text-[15px] sm:text-[18px] sm:leading-[28px] font-normal sm:pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
