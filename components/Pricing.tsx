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
}

// Define the array of pricing plans
const pricingPlans: PricingPlan[] = [
  {
    title: "Monthly Plan",
    price: 15,
    total: 15,
    buttonText: "Start Free Trial",
  },
  {
    title: "1 Year Plan",
    price: 8,
    total: 5,
    discount: "Save 46%",
    buttonText: "Start Free Trial",
  },
  {
    title: "3 Year Plan",
    price: 5,
    total: 180,
    discount: "Save 46%",
    buttonText: "Start Free Trial",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#0170FE] w-full py-[104px] px-4 md:px-8">
      <div className="w-full max-w-[1240px] mx-auto">
        <h2 className="text-center text-white text-[48px] leading-[58px] font-semibold uppercase">
          pricing
        </h2>
        {/* Plan */}
        <div className="mt-11 grid grid-cols-3 gap-[24px]">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full rounded-[22px] py-[28px] px-6 bg-white relative"
            >
              {plan.discount && (
                <div className="absolute -top-[4.5px] right-[24px]">
                  <Image src={Badge} alt="badge" width={70} height={70} />
                  <div className="absolute top-2.5 right-[14px] w-[40px]  text-white text-[14px] leading-[16px] font-medium">
                    <h2>{plan.discount}</h2>
                  </div>
                </div>
              )}
              <h2 className="text-[#111111] text-[26px] leading-[26px] font-semibold text-center capitalize">
                {plan.title}
              </h2>
              <div className="mt-10 flex items-end justify-center text-[#111111] font-normal">
                <h2 className="text-[96px] leading-[86px]">${plan.price}</h2>
                <span className="text-[18px] leading-[24.59px] font-normal">
                  / Month
                </span>
              </div>
              {plan.total && (
                <h2 className="mt-10 text-[#333333] text-[24px] leading-[25px] font-medium capitalize text-center">
                  ${plan.total} Total
                </h2>
              )}
              <button className="mt-[28px] capitalize bgcustom w-full h-[56px] rounded-[70px] text-white text-[16px] leading-[20.16px] font-bold">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-[31px] flex items-center text-center justify-center gap-2 text-shadow-custom text-white">
          <Image src={Info} alt="info" width={16} height={16} />
          <p className="text-[18px] leading-[18px] font-medium ">
            When subscribed, an email will be sent to you with the install
            instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
