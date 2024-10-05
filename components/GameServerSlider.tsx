"use client";
import Image from "next/image";
import { useRef, MouseEvent, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Extend HTMLDivElement to include custom properties, but don't override scrollLeft
interface CustomDivElement extends HTMLDivElement {
  isDown?: boolean;
  startX?: number;
}

interface Connection {
  id: string;
  game: string;
  cloud: string;
  logo: string;
  cloudLogo: string;
}

const connections: Connection[] = [
  {
    id: "1",
    game: "Epic Games",
    cloud: "AWS",
    logo: "/epic_games.png",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "2",
    game: "Activision Blizzard",
    cloud: "Google Cloud",
    logo: "/activision_blizzard.png",
    cloudLogo: "/google-cloud.svg",
  },
  {
    id: "3",
    game: "Electronic Arts",
    cloud: "AWS",
    logo: "/electronic-arts.png",
    cloudLogo: "/azure-cloud.svg",
  },
  {
    id: "4",
    game: "Ubisoft",
    cloud: "Microsoft Azure",
    logo: "/ubisoft.png",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "5",
    game: "Game Studio 5",
    cloud: "AWS",
    logo: "/epic_games.png",
    cloudLogo: "/google-cloud.svg",
  },
  {
    id: "6",
    game: "Electronic Arts",
    cloud: "AWS",
    logo: "/electronic-arts.png",
    cloudLogo: "/azure-cloud.svg",
  },
  {
    id: "7",
    game: "Ubisoft",
    cloud: "Microsoft Azure",
    logo: "/ubisoft.png",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "8",
    game: "Game Studio 5",
    cloud: "AWS",
    logo: "/epic_games.png",
    cloudLogo: "/google-cloud.svg",
  },
];

export default function Component() {
  const scrollRef = useRef<CustomDivElement | null>(null);

  // State to track which button is currently active
  const [activeButton, setActiveButton] = useState<"left" | "right" | null>(
    null
  );

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -311, // Adjust based on image width
        behavior: "smooth",
      });
      setActiveButton("left"); // Set active button to left
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 311, // Adjust based on image width
        behavior: "smooth",
      });
      setActiveButton("right"); // Set active button to right
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.isDown = true;
      scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
      scrollRef.current.scrollLeft = scrollRef.current.scrollLeft; // scrollLeft is still a number
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.isDown = false;
    }
  };

  const handleMouseUp = () => {
    if (scrollRef.current) {
      scrollRef.current.isDown = false;
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current?.isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - (scrollRef.current.startX || 0)) * 2; // Scroll speed
    scrollRef.current.scrollLeft = (scrollRef.current.scrollLeft || 0) - walk;
  };

  return (
    <div className="w-full mx-auto lg:ps-[84px] md:ps-[34px] py-8">
      <div className="flex justify-between items-center md:mb-8 sm:ps-[16px] ps-[15px] lg:pe-[100px] md:pe-[50px] pe-[24px]">
        <h1 className="lg:text-[45px] lg:leading-[58px] md:leading-[45px] md:text-[35px] sm:text-[30px] text-[20px] font-[600] max-w-[508px]">
          DIRECT GAMESERVER CONNECTIONS
        </h1>
        <div className="flex gap-[8px]">
          <button
            onClick={scrollLeft}
            className={`md:w-[52px] md:h-[52px] min-h-[30px] h-[30px] min-w-[30px] w-[30px] rounded-full from-[#01E4FD] to-[#0176FE] flex items-center justify-center transition duration-200 ${
              activeButton === "left"
                ? "bg-gradient-to-r border-0 text-white"
                : "border-[1.8px] border-black"
            }`}
            aria-label="Previous slide"
          >
            <IoIosArrowRoundBack className="md:w-[30px] min-w-[18px] min-h-[18px] w-[18px] md:h-[30px] h-[18px]" />
          </button>
          <button
            onClick={scrollRight}
            className={`md:w-[52px] md:h-[52px] min-h-[30px] h-[30px] min-w-[30px] w-[30px] rounded-full flex items-center from-[#01E4FD] to-[#0176FE] justify-center transition duration-200 ${
              activeButton === "right"
                ? "bg-gradient-to-r border-0 text-white"
                : "border-[1.8px] border-black"
            }`}
            aria-label="Next slide"
          >
            <IoIosArrowRoundForward className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full md:h-[300px] h-[220px] flex items-center overflow-x-auto ps-4 xxl:ps-20 scrollbar-hide cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-4">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="md:w-[292px] w-[200px] md:h-[242px] h-[170px] rounded-[18px] flex-shrink-0 md:px-[28px] md:pt-[28px] pt-[20px] md:pb-[28px] px-[12px] pb-[0] flex flex-col items-center justify-between"
              style={{
                boxShadow: "-1px 3px 30px 0px #0000001F",
              }}
            >
              <div className="flex gap-[8px] items-center justify-center">
                <Image
                  width={25.17}
                  height={28.19}
                  src={connection.logo}
                  alt={connection.game}
                />
                <h3 className="my-auto md:text-[23px] text-[11px] font-[600] text-black">
                  {connection.game}
                </h3>
              </div>
              <img
                className="object-contain w-full h-full"
                src={connection.cloudLogo}
                alt={connection.game}
              />
            </div>
          ))}
          {/* Spacer */}
          <div className="min-w-[1px] flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
