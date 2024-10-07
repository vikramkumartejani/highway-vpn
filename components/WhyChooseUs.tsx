"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VPNOption = ({
  name,
  latency,
  color,
  icon,
  col,
  bar,
}: {
  name: string;
  latency: string;
  color: string;
  icon: React.ReactNode;
  col: boolean;
  bar: string;
}) => {
  const [barWidth, setBarWidth] = useState("0%");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarWidth(bar); // Set the bar width to the target value when in view
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [bar]);

  return (
    <div
      className={`flex ${
        col ? "flex-col items-start" : "flex-row items-center"
      }  gap-[15px] p-[15px] w-full border border-[#00000033] rounded-[10px]`}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <div
        className="md:w-[70px] md:min-w-[70px] min-w-[60px] w-[60px] md:h-[70px] md:min-h-[70px] min-h-[60px] h-[60px] rounded-[10px] bg-white flex items-center justify-center border border-[#00000029]"
        style={{ boxShadow: "0px 0px 18px 0px #0000001C" }}
      >
        {icon}
      </div>
      <div className="flex-grow w-full flex flex-col gap-[21px]">
        <div className="flex justify-between items-center flex-wrap gap-1">
          <span className="font-[500] lg:text-[20px] text-black">{name}</span>
          <span
            className={`text-[14px] leading-[14px] font-[500] text-white rounded-full px-[20px] py-[6px] ${
              color === "green" ? "bg-[#6BB66B]" : "bg-[#FF5252]"
            }`}
          >
            {latency}
          </span>
        </div>
        <div className="h-[10px] w-full rounded-full bg-[#E6E6E6]">
          <div
            ref={barRef}
            className="h-[10px] rounded-full transition-all duration-1000"
            style={{
              width: barWidth, // Use state to control width
              backgroundColor: color === "green" ? "#6BB66B" : "#FF5252",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({
  icon,
  title,
  description,
  dragon,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  dragon: boolean;
}) => (
  <div
    className="md:bg-[#F0F0F0] transition bg-white hover:bg-white lg:px-[28px] md:px-[22px] md:py-[28px] px-[15px] py-[20px] rounded-[20px] border border-[#00000029]"
    style={{
      boxShadow: "0px 2px 24px 0px #00000021",
    }}
  >
    <div
      className={`flex items-center justify-center md:w-[60px] md:h-[60px] w-[50px] h-[50px] md:p-0 ${
        dragon ? "p-3" : "p-2"
      } bg-[#0170FE] text-white rounded-[10px] inline-block mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <div className="md:py-[180px] py-16 lg:px-[84px] md:px-[34px] px-[15px]">
      <div className="">
        <h2 className="text-[30px] md:text-[48px] md:leading-[58px] font-[600] text-black text-center mb-[50px]">
          WHY CHOOSE US
        </h2>

        <div className="grid md:grid-cols-2 gap-[24px] mb-[24px]">
          <div
            className="flex flex-col gap-[28px] bg-white md:px-[25px] px-[15px] py-[32px] rounded-lg shadow-md"
            style={{
              boxShadow: "-1px 3px 20px 0px #0000001F",
            }}
          >
            <h3 className="lg:text-[24px] md:text-[22px] text-[20px] font-[600] mb-[7px] text-black">
              Average VPN Gaming Latency (Ping)
            </h3>
            <VPNOption
              icon={
                <Image
                  className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                  src="/highwayvpn.svg"
                  width={50}
                  height={50}
                  alt="icon"
                />
              }
              col={false}
              name="HighwayVPN"
              latency="8ms"
              color="green"
              bar="17%"
            />
            <VPNOption
              icon={
                <Image
                  className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                  src="/nordvpn.svg"
                  width={50}
                  height={50}
                  alt="icon"
                />
              }
              col={false}
              name="NordVPN"
              latency="123ms"
              color="red"
              bar="70%"
            />
            <VPNOption
              icon={
                <Image
                  className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                  src="/expressvpn.svg"
                  width={50}
                  height={50}
                  alt="icon"
                />
              }
              col={false}
              name="ExpressVPN"
              latency="206ms"
              color="red"
              bar="97%"
            />
          </div>

          <div
            className="flex flex-col gap-[27px] bg-white md:px-[25px] px-[15px] py-[32px] rounded-lg shadow-md"
            style={{
              boxShadow: "-1px 3px 20px 0px #0000001F",
            }}
          >
            <h3 className="lg:text-[24px] md:text-[22px] text-[20px] font-[600] mb-[7px] text-black">
              Average Jitter
            </h3>
            <div className="flex flex-col gap-[11px]">
              <VPNOption
                icon={
                  <Image
                    className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                    src="/highwayvpn.svg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                }
                col={true}
                name="HighwayVPN"
                latency="8ms"
                color="green"
                bar="17%"
              />
              <VPNOption
                icon={
                  <Image
                    className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
                    src="/none.svg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                }
                col={true}
                name="Without VPN"
                latency="12ms"
                color="red"
                bar="30%"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[24px]">
          <FeatureBox
            icon={
              <Image
                src="/lock-icon.svg"
                width={28.89}
                height={28.89}
                alt="icon"
              />
            }
            dragon={false}
            title="Zero Logs Policy"
            description="We do not store any logs or data. All activity is completely anonymous and secure."
          />
          <FeatureBox
            icon={
              <Image
                src="/link-icon.svg"
                width={26.67}
                height={20}
                alt="icon"
              />
            }
            dragon={false}
            title="Direct Links To Game Servers"
            description="We establish direct links to the largest data centers, most of which are used to host your favorite online games."
          />
          <FeatureBox
            icon={
              <Image
                src="/dragon-icon.svg"
                width={18.44}
                height={31.42}
                alt="icon"
              />
            }
            dragon
            title="Wireguard Protocol"
            description="Wireguard is a highly trusted VPN protocol, it has state-of-the-art encryption, ultra low latency and very high bandwidth capacity."
          />
        </div>
      </div>
    </div>
  );
}
