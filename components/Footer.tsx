import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="mt-[100px]">
      <div className="py-8 text-white relative">
        <img
          src="/footer-bg.png"
          className="w-full h-full object-cover absolute left-0 z-[1]"
        />
        <img
          src="/footer-bg-style.png"
          className="w-full h-full object-cover absolute left-0 -bottom-8 z-[1]"
        />
        <div className="relative container max-w-[1140px] mx-auto text-black mt-[-85px] px-4 z-[40]">
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white md:px-[47px] md:py-[47px] sm:px-[30px] sm:py-[30px] px-[15px] py-[28px] p-6 rounded-[15px] overflow-hidden"
            style={{ boxShadow: "0px 0px 34px 0px #00000038" }}
          >
            <div className="mb-4 md:mb-0">
              <h2 className="text-[30px] sm:text-[34px] md:text-[46px] md:leading-[51px] sm:leading-[45px] leading-[40px] font-[600] w-full md:max-w-[460px] max-w-[350px]">
                Start Your 3 Day Free Trial Today!
              </h2>
              <p className="text-[#333333] mt-2 md:text-[18px] text-[16px] font-[400]">
                Instant free cancellation at anytime.
              </p>
            </div>
            <a
              href="/#pricing"
              className="text-white font-[700] md:p-[17px] p-[12px] rounded-full transition-colors shadow-lg md:text-[18px] text-[16px] text-center md:w-[250px] sm:w-[180px]"
              style={{
                background: "linear-gradient(270deg, #01E4FD 0%, #0176FE 100%)",
              }}
            >
              Subscribe Now
            </a>
          </div>
        </div>
        <div className="relative mt-[50px] lg:px-[84px] md:px-[34px] px-[15px] pb-[55px] z-[2]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                <Image src="/logo.svg" alt="logo" width={226.79} height={80} />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="md:w-[44.86px] w-[40px] md:h-[44.86px] h-[40px] flex items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(270deg, #01E4FD 0%, #0176FE 100%)",
                }}
              >
                <ImFacebook
                  color="white"
                  className="md:w-[21px] w-[20px] md:h-[24px] h-[20px]"
                />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="md:w-[44.86px] w-[40px] md:h-[44.86px] h-[40px] flex items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(270deg, #01E4FD 0%, #0176FE 100%)",
                }}
              >
                <FaTwitter
                  color="white"
                  className="md:w-[21px] w-[20px] md:h-[24px] h-[20px]"
                />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="md:w-[44.86px] w-[40px] md:h-[44.86px] h-[40px] flex items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(270deg, #01E4FD 0%, #0176FE 100%)",
                }}
              >
                <ImInstagram
                  color="white"
                  className="md:w-[21px] w-[20px] md:h-[24px] h-[20px]"
                />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 lg:w-[88%] sm:w-[92%] w-[94%] pt-[31px] text-center font-[400] text-[16px] text-white border-t-[0.8px] border-t-white">
            © 2024 HighwayVPN
          </div>
        </div>
      </div>
    </footer>
  );
}
