import Image from "next/image";
import React from "react";
import Info from "../app/assets/info.svg";
import Badge from "../app/assets/badge.svg";

interface PricingPlan {
  title: string;
  price: number;
  total?: number;
  discount?: string;
  buttonText: string;
  buttonLink: string;
}

// Define the array of pricing plans
const pricingPlans: PricingPlan[] = [
  {
    title: "Monthly Plan",
    price: 15,
    total: 15,
    buttonText: "Start Free Trial",
    buttonLink: "#1",
  },
  {
    title: "1 Year Plan",
    price: 8,
    total: 5,
    discount: "Save 46%",
    buttonText: "Start Free Trial",
    buttonLink: "#2",
  },
  {
    title: "3 Year Plan",
    price: 5,
    total: 180,
    discount: "Save 46%",
    buttonText: "Start Free Trial",
    buttonLink: "#1",
  },
];

const Pricing: React.FC = () => {
  return (
    <div
      id="pricing"
      className="bg-[#0170FE] w-full py-[100px] md:py-[180px] lg:px-[84px] md:px-[34px] px-[15px]"
    >
      <div className="w-full max-w-[1240px] mx-auto">
        <h2 className="text-center text-white md:text-[48px] text-[30px] md:leading-[58px] font-semibold uppercase">
          pricing
        </h2>
        {/* Plan */}
        <div className="mt-11 flex lg:flex-row flex-col gap-[24px] items-center justify-between">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="lg:w-[30%] sm:w-[90%] w-full  rounded-[22px] py-[28px] lg:px-6 px-4 bg-white relative"
            >
              {plan.discount && (
                <div className="absolute -top-[4.5px] lg:right-[24px] right-[10px]">
                  <Image src={Badge} alt="badge" draggable="false" width={70} height={70} />
                  <div className="absolute top-2.5 right-[12px] w-[40px]  text-white text-[14px] leading-[16px] font-medium">
                    <h2>{plan.discount}</h2>
                  </div>
                </div>
              )}
              <h2 className="text-[#111111] md:text-[26px] text-[22px] md:leading-[26px] font-semibold text-center capitalize">
                {plan.title}
              </h2>
              <div className="mt-10 flex items-end justify-center text-[#111111] font-normal">
                <h2 className="md:text-[96px] text-[70px] md:leading-[86px] leading-[70px]">
                  ${plan.price}
                </h2>
                <span className="md:text-[18px] leading-[24.59px] font-normal">
                  / Month
                </span>
              </div>
              {plan.total && (
                <h2 className="mt-10 text-[#333333] md:text-[24px] text-[20px] leading-[25px] font-medium capitalize text-center">
                  ${plan.total} Total
                </h2>
              )}
              <a href={plan.buttonLink} className="w-full h-fit">
                <button className="mt-[28px] capitalize bgcustom w-full md:h-[56px] h-[50px] rounded-[70px] text-white text-[16px] leading-[20.16px] font-bold">
                  {plan.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-[31px] flex items-center justify-center gap-2 text-shadow-custom text-white">
          <Image src={Info} alt="info" width={16} draggable="false" height={16} />
          <p className="md:text-[18px] leading-[18px] font-medium ">
            When subscribed, an email will be sent to you with the install
            instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
