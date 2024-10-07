"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import the Marquee component

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
    logo: "/epic_games.svg",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "2",
    game: "Activision Blizzard",
    cloud: "Google Cloud",
    logo: "/activision_blizzard.svg",
    cloudLogo: "/google-cloud.svg",
  },
  {
    id: "3",
    game: "Electronic Arts",
    cloud: "AWS",
    logo: "/electronic-arts.svg",
    cloudLogo: "/azure-cloud.svg",
  },
  {
    id: "4",
    game: "Ubisoft",
    cloud: "Microsoft Azure",
    logo: "/ubisoft.svg",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "5",
    game: "Game Studio 5",
    cloud: "AWS",
    logo: "/epic_games.svg",
    cloudLogo: "/google-cloud.svg",
  },
  {
    id: "6",
    game: "Electronic Arts",
    cloud: "AWS",
    logo: "/electronic-arts.svg",
    cloudLogo: "/azure-cloud.svg",
  },
  {
    id: "7",
    game: "Ubisoft",
    cloud: "Microsoft Azure",
    logo: "/ubisoft.svg",
    cloudLogo: "/aws-cloud.svg",
  },
  {
    id: "8",
    game: "Game Studio 5",
    cloud: "AWS",
    logo: "/epic_games.svg",
    cloudLogo: "/google-cloud.svg",
  },
];

export default function Component() {
  return (
    <div className="w-full mx-auto lg:ps-[84px] md:ps-[34px] py-8">
      <div className="flex justify-between items-center md:mb-8 sm:ps-[16px] ps-[15px] lg:pe-[100px] md:pe-[50px] pe-[24px]">
        <h1 className="lg:text-[45px] lg:leading-[58px] md:leading-[45px] md:text-[35px] sm:text-[30px] text-[20px] font-[600] max-w-[508px]">
          DIRECT GAMESERVER CONNECTIONS
        </h1>
      </div>
      <Marquee gradient={false} speed={50}>
        {/* Duplicate the first item to create the illusion of consistent gap */}
        <div className="flex gap-4">
          {connections.map((connection, index) => (
            <div
              key={connection.id}
              className="md:w-[292px] w-[200px] md:h-[242px] h-[170px] rounded-[18px] flex-shrink-0 md:px-[28px] md:pt-[28px] pt-[20px] md:pb-[28px] px-[12px] pb-[0] flex flex-col items-center justify-between md:bg-[#F0F0F0] transition bg-white hover:bg-white border border-[#00000029]"
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
          {/* Spacer to create the gap at the end of the Marquee */}
          <div className="min-w-[0px]"></div> {/* Match the size of items */}
        </div>
      </Marquee>
    </div>
  );
}
