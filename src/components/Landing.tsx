import LogoFirejet from "/src/components/assets/LogoFirejet";
import AccountCircle from "/src/components/assets/AccountCircle";
import Download from "/src/components/assets/Download";
import BxArrowBack from "/src/components/assets/BxArrowBack";
import Frame4934 from "/src/components/assets/Frame4934";
import FluentCall16Filled from "/src/components/assets/FluentCall16Filled";
import IcRoundEmail from "/src/components/assets/IcRoundEmail";
import FileIconsTelegram from "/src/components/assets/FileIconsTelegram";
import CarbonLocationFilled from "/src/components/assets/CarbonLocationFilled";
import Frame4935 from "/src/components/assets/Frame4935";

export default function Landing({ className = "" }: LandingProps) {
  return (
    <div
      className={`font-inter order-none inline-flex w-full flex-col items-center bg-neutral-100 pt-8 tracking-[0px] min-[1440px]:order-none min-[1440px]:gap-y-3 ${className}`}
    >
      <div className="inline-flex flex-col items-center self-stretch min-[1440px]:order-none min-[1440px]:flex min-[1440px]:flex-row min-[1440px]:justify-center min-[1440px]:gap-x-[492px] min-[1440px]:pr-16 min-[1440px]:pl-12 min-[1440px]:text-xl min-[1440px]:leading-10" >
        <div className="flex items-center justify-center gap-x-44 self-stretch pl-12 pr-32 text-right text-xl font-bold leading-10 text-neutral-100 min-[1440px]:items-start min-[1440px]:justify-start min-[1440px]:gap-x-0 min-[1440px]:self-auto min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:font-[inherit] min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:text-[inherit] min-[1440px]:[text-align:inherit]" >
          <LogoFirejet className="h-14 w-36" />
          <div className="flex justify-end self-stretch rounded-md bg-gradient-to-r from-[#F08057] to-[#EEA25C] py-1.5 px-8 min-[1440px]:hidden" >
            Get Started
          </div>
        </div>
        <div className="flex h-0 items-end justify-center self-stretch px-16 pb-0 min-[1440px]:h-auto min-[1440px]:flex-grow min-[1440px]:flex-wrap min-[1440px]:items-center min-[1440px]:gap-x-8 min-[1440px]:gap-y-5 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:pb-0 min-[1440px]:[min-width:142px]" >
          <div className="hidden pt-0.5 text-left font-medium text-black min-[1440px]:block" >
            Docs
          </div>
          <div className="hidden h-11 w-11 pt-0.5 text-left font-medium text-black min-[1440px]:block" >
            Blog
          </div>
          <div className="hidden pt-0.5 text-left font-medium text-black min-[1440px]:block" >
            Pricing
          </div>
          <div className="hidden pt-0.5 text-left font-medium text-black min-[1440px]:block" >
            Discord
          </div>
          <div className="hidden justify-end pt-0.5 text-right font-medium text-black min-[1440px]:flex" >
            Login
          </div>
          <div className="mt-0.5 hidden justify-end self-stretch rounded-md bg-gradient-to-r from-[#F08057] to-[#EEA25C] py-1.5 px-8 text-right font-bold text-neutral-100 min-[1440px]:flex" >
            Get Started
          </div>
          <div className="flex h-10 flex-grow items-center justify-end min-[1440px]:h-auto min-[1440px]:flex-grow-0 min-[1440px]:items-start min-[1440px]:justify-start" >
            <AccountCircle className="h-10 w-10 min-[1440px]:mt-0.5" />
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-center self-stretch min-[1440px]:flex min-[1440px]:flex-row min-[1440px]:justify-center min-[1440px]:gap-x-2.5 min-[1440px]:pt-20 min-[1440px]:pr-80 min-[1440px]:pl-80 min-[1440px]:text-5xl min-[1440px]:font-semibold min-[1440px]:[order:1]" >
        <div className="flex items-center justify-center gap-x-2.5 self-stretch px-40 pt-24 text-5xl font-semibold leading-[53px] min-[1440px]:justify-start min-[1440px]:pt-0 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:font-[inherit] min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit]" >
          <div className="text-left text-black min-[1440px]:leading-[53px]">
            Figma
          </div>
          <div className="flex justify-end text-right text-black/0 min-[1440px]:block min-[1440px]:justify-start min-[1440px]:text-left min-[1440px]:leading-[53px]" >
            <span className="bg-gradient-to-l from-[#EEA25C] to-[#F08057] bg-clip-text" >
              Design
            </span>
          </div>
          <div className="flex justify-end text-right text-neutral-900 min-[1440px]:block min-[1440px]:justify-start min-[1440px]:text-left min-[1440px]:leading-[53px]" >
            to
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2.5 self-stretch px-36 pt-2.5 text-5xl font-semibold min-[1440px]:hidden" >
          <div className="flex flex-grow items-center justify-center self-stretch rounded-xl bg-gradient-to-r from-[#F08057] to-[#EEA25C] p-5 text-left leading-10 text-neutral-100" >
            <div className="flex-grow">Readable</div>
          </div>
          <div className="flex justify-end text-right leading-[53px] text-neutral-900" >
            Code
          </div>
        </div>
        <div className="hidden justify-end self-stretch rounded-xl bg-gradient-to-r from-[#F08057] to-[#EEA25C] p-5 text-right leading-10 text-neutral-100 min-[1440px]:flex" >
          Readable
        </div>
        <div className="hidden justify-end text-right leading-[53px] text-neutral-900 min-[1440px]:flex" >
          Code
        </div>
      </div>
      <div className="flex items-end justify-center self-stretch pt-3 text-center text-2xl leading-10 text-neutral-900 min-[1440px]:items-start min-[1440px]:self-auto min-[1440px]:pt-0 min-[1440px]:[order:2]" >
        <span>
          <span className="font-normal">
            {"Turn your Figma components into "}
          </span>
          <span className="font-semibold">human-readable</span>
          <span className="whitespace-pre font-normal">
            {" React code with a single "}
          </span>
          <span className="font-normal">*CLICK*</span>
        </span>
      </div>
      <div className="flex items-end justify-center self-stretch pt-16 text-center text-xl font-bold leading-10 text-neutral-100 min-[1440px]:pt-14 min-[1440px]:[order:3]" >
        <div className="flex justify-center rounded-md bg-gradient-to-r from-[#F08057] to-[#EEA25C] py-1.5 px-8" >
          Get Figma Plugin
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-y-12 gap-x-12 self-stretch px-9 pt-16 text-left text-black min-[1440px]:pt-20 min-[1440px]:pr-24 min-[1440px]:pl-24 min-[1440px]:[order:4]" >
        <div className="flex w-72 flex-col items-start justify-center gap-y-3 min-[1440px]:self-stretch" >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800" >
            <Download className="h-12 w-12" />
          </div>
          <div className="self-stretch text-xl font-semibold leading-7 min-[1440px]:text-2xl" >
            Human Readability
          </div>
          <div className="self-stretch text-base font-light leading-6 min-[1440px]:text-xl" >
            Code readability optimized for React developers. Understand easily and make changes to exported code hassle-free
          </div>
          <div className="flex items-start gap-x-3 self-stretch pt-0 text-xl font-normal leading-[normal] min-[1440px]:hidden" >
            <div className="flex flex-col items-start justify-center gap-y-12 self-stretch" >
              <div className="flex items-center self-stretch">
                Learn More
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800" >
                <Download className="h-12 w-12" />
              </div>
            </div>
            <BxArrowBack className="h-6 w-6" />
          </div>
          <div className="self-stretch text-xl font-semibold leading-7 min-[1440px]:hidden" >
            Pixel Perfection
          </div>
          <div className="self-stretch text-base font-light leading-6 min-[1440px]:hidden" >
            100% pixel perfection with zero design leakage during conversion
          </div>
          <div className="flex items-center gap-x-3 self-stretch text-xl font-normal leading-[normal]" >
            <div className="flex items-center">Learn More</div>
            <BxArrowBack className="h-6 w-6" />
          </div>
        </div>
        <div className="flex w-72 flex-col items-start justify-center gap-y-3 self-stretch min-[1440px]:w-auto min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:justify-start min-[1440px]:gap-y-12 min-[1440px]:gap-x-12" >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 min-[1440px]:h-auto min-[1440px]:w-72 min-[1440px]:flex-col min-[1440px]:items-start min-[1440px]:gap-y-3 min-[1440px]:rounded-tr-none min-[1440px]:rounded-tl-none min-[1440px]:rounded-br-none min-[1440px]:rounded-bl-none min-[1440px]:bg-transparent min-[1440px]:[order:2]" >
            <div className="flex min-[1440px]:h-12 min-[1440px]:w-12 min-[1440px]:items-center min-[1440px]:justify-center min-[1440px]:rounded-tr-[999px] min-[1440px]:rounded-tl-[999px] min-[1440px]:rounded-br-[999px] min-[1440px]:rounded-bl-[999px] min-[1440px]:bg-gray-800" >
              <Download className="h-12 w-12" />
            </div>
            <div className="hidden self-stretch text-2xl font-semibold leading-7 min-[1440px]:block" >
              Tailwind CSS
            </div>
            <div className="hidden self-stretch text-xl font-light leading-6 min-[1440px]:block" >
              Generate code in Tailwind, the fastest growing CSS framework today
            </div>
            <div className="hidden items-center gap-x-3 self-stretch text-xl font-normal leading-[normal] min-[1440px]:flex" >
              <div className="flex items-center">Learn More</div>
              <BxArrowBack className="h-6 w-6" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-3 self-stretch min-[1440px]:order-none min-[1440px]:w-72 min-[1440px]:justify-center min-[1440px]:self-auto" >
            <div className="self-stretch text-xl font-semibold leading-7 min-[1440px]:text-2xl min-[1440px]:[order:1]" >
              Layout Responsive
            </div>
            <div className="self-stretch text-base font-light leading-6 min-[1440px]:text-xl min-[1440px]:[order:2]" >
              Fully responsive code outputs based on your defined Figma autoLayout and constraints.
            </div>
            <div className="flex items-start gap-x-3 self-stretch pt-0 text-xl font-normal leading-[normal] min-[1440px]:items-center min-[1440px]:pt-0 min-[1440px]:[order:3]" >
              <div className="flex flex-col items-start justify-center gap-y-20 self-stretch min-[1440px]:hidden" >
                <div className="flex items-center self-stretch">
                  Learn More
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800" >
                  <Download className="h-12 w-12" />
                </div>
              </div>
              <BxArrowBack className="h-6 w-6" />
              <div className="hidden items-center min-[1440px]:flex">
                Learn More
              </div>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-gray-800 min-[1440px]:order-none min-[1440px]:flex" >
              <Download className="h-12 w-12" />
            </div>
          </div>
          <div className="self-stretch text-xl font-semibold leading-7 min-[1440px]:hidden" >
            Tailwind CSS
          </div>
          <div className="self-stretch text-base font-light leading-6 min-[1440px]:hidden" >
            Generate code in Tailwind, the fastest growing CSS framework today
          </div>
          <div className="flex items-center gap-x-3 self-stretch text-xl font-normal leading-[normal] min-[1440px]:w-72 min-[1440px]:flex-col min-[1440px]:items-start min-[1440px]:justify-center min-[1440px]:gap-x-0 min-[1440px]:gap-y-3 min-[1440px]:self-auto min-[1440px]:font-[inherit] min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:[order:1]" >
            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-gray-800 min-[1440px]:flex" >
              <Download className="h-12 w-12" />
            </div>
            <div className="hidden self-stretch text-2xl font-semibold leading-7 min-[1440px]:block" >
              Pixel Perfection
            </div>
            <div className="hidden self-stretch text-xl font-light leading-6 min-[1440px]:block" >
              100% pixel perfection with zero design leakage during conversion
            </div>
            <div className="flex items-center gap-x-3 self-stretch min-[1440px]:text-xl min-[1440px]:font-normal min-[1440px]:leading-[normal]" >
              <div className="flex items-center">Learn More</div>
              <BxArrowBack className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-center self-stretch min-[1440px]:flex min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:items-start min-[1440px]:justify-center min-[1440px]:gap-x-5 min-[1440px]:gap-y-5 min-[1440px]:pt-20 min-[1440px]:pr-36 min-[1440px]:pl-36 min-[1440px]:text-left min-[1440px]:leading-[27px] min-[1440px]:text-black min-[1440px]:[order:7]" >
        <div className="flex items-end justify-center self-stretch px-40 pt-20 text-left leading-[27px] text-black min-[1440px]:w-96 min-[1440px]:flex-col min-[1440px]:items-center min-[1440px]:gap-y-3 min-[1440px]:self-auto min-[1440px]:rounded-tr-xl min-[1440px]:rounded-tl-xl min-[1440px]:rounded-br-xl min-[1440px]:rounded-bl-xl min-[1440px]:bg-white min-[1440px]:pt-8 min-[1440px]:pr-8 min-[1440px]:pl-8 min-[1440px]:pb-8 min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:drop-shadow-lg min-[1440px]:[text-align:inherit]" >
          <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch rounded-xl bg-white p-8 drop-shadow-lg min-[1440px]:flex-grow-0 min-[1440px]:justify-start min-[1440px]:rounded-tr-none min-[1440px]:rounded-tl-none min-[1440px]:rounded-br-none min-[1440px]:rounded-bl-none min-[1440px]:bg-transparent min-[1440px]:pt-0 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:pb-0 min-[1440px]:filter-none" >
            <div className="self-stretch text-lg font-normal leading-[27px]">
              Tried other figma-to-code tools before but I like this UX the best. The founders are were very receptive to my suggestions too.
            </div>
            <div className="flex items-center justify-center gap-x-3 self-stretch text-base leading-[27px]" >
              <Frame4934 className="h-14 w-14 min-[1440px]:hidden" />
              <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                <div className="self-stretch font-semibold">
                  Daryl Wong
                </div>
                <div className="self-stretch font-normal">
                  Software Engineer, Grab
                </div>
              </div>
              <Frame4935 className="hidden h-14 w-14 min-[1440px]:block" />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center self-stretch px-40 pt-5 text-left leading-[27px] text-black min-[1440px]:w-96 min-[1440px]:flex-col min-[1440px]:items-center min-[1440px]:gap-y-3 min-[1440px]:self-auto min-[1440px]:rounded-tr-xl min-[1440px]:rounded-tl-xl min-[1440px]:rounded-br-xl min-[1440px]:rounded-bl-xl min-[1440px]:bg-white min-[1440px]:pt-8 min-[1440px]:pr-8 min-[1440px]:pl-8 min-[1440px]:pb-8 min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:drop-shadow-lg min-[1440px]:[text-align:inherit]" >
          <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch rounded-xl bg-white p-8 drop-shadow-lg min-[1440px]:flex-grow-0 min-[1440px]:justify-start min-[1440px]:rounded-tr-none min-[1440px]:rounded-tl-none min-[1440px]:rounded-br-none min-[1440px]:rounded-bl-none min-[1440px]:bg-transparent min-[1440px]:pt-0 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:pb-0 min-[1440px]:filter-none" >
            <div className="self-stretch text-lg font-normal leading-[27px]">
              The code looks organized and decent. Definitely using it!
            </div>
            <div className="flex items-center justify-center gap-x-3 self-stretch text-base leading-[27px]" >
              <Frame4934 className="h-14 w-14 min-[1440px]:hidden" />
              <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                <div className="self-stretch font-semibold">
                  Stephen Diala
                </div>
                <div className="self-stretch font-normal">
                  Frontend Developer, Meetap
                </div>
              </div>
              <Frame4935 className="hidden h-14 w-14 min-[1440px]:block" />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center self-stretch px-40 pt-5 text-left leading-[27px] text-black min-[1440px]:w-96 min-[1440px]:flex-col min-[1440px]:items-center min-[1440px]:gap-y-3 min-[1440px]:rounded-tr-xl min-[1440px]:rounded-tl-xl min-[1440px]:rounded-br-xl min-[1440px]:rounded-bl-xl min-[1440px]:bg-white min-[1440px]:pt-8 min-[1440px]:pr-8 min-[1440px]:pl-8 min-[1440px]:pb-8 min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:drop-shadow-lg min-[1440px]:[text-align:inherit]" >
          <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch rounded-xl bg-white p-8 drop-shadow-lg min-[1440px]:flex-grow-0 min-[1440px]:justify-start min-[1440px]:rounded-tr-none min-[1440px]:rounded-tl-none min-[1440px]:rounded-br-none min-[1440px]:rounded-bl-none min-[1440px]:bg-transparent min-[1440px]:pt-0 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:pb-0 min-[1440px]:filter-none" >
            <div className="self-stretch text-lg font-normal leading-[27px]">
              Firejet increases work rate as you don't have to spend time setting up a project after the design has been done. Just install the plugin and convert the designs. Would highly recommend. 🔥
            </div>
            <div className="flex items-start justify-center gap-x-3 self-stretch text-base leading-[27px]" >
              <Frame4934 className="h-14 w-14 min-[1440px]:hidden" />
              <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                <div className="self-stretch font-semibold">
                  Agathe Ambrose
                </div>
                <div className="self-stretch font-normal">
                  Software Engineering Manager, MOMENTS
                </div>
              </div>
              <Frame4935 className="hidden h-14 w-14 min-[1440px]:block" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-stretch pt-20 text-center text-[32px] font-medium leading-[53px] text-gray-800 min-[1440px]:[order:5]" >
        Don’t take our word for it
      </div>
      <div className="flex justify-center self-stretch pt-3 text-center text-5xl font-bold leading-[53px] text-black/0 min-[1440px]:self-auto min-[1440px]:pt-0 min-[1440px]:[order:6]" >
        <span className="bg-gradient-to-l from-[#EEA25C] to-[#F08057] bg-clip-text" >
          Trust our customers
        </span>
      </div>
      <div className="flex items-end justify-center self-stretch pt-16 min-[1440px]:mt-20 min-[1440px]:flex-wrap min-[1440px]:items-start min-[1440px]:gap-x-9 min-[1440px]:gap-y-9 min-[1440px]:bg-gray-800 min-[1440px]:pb-16 min-[1440px]:pr-80 min-[1440px]:pl-80 min-[1440px]:[order:8]" >
        <div className="flex flex-grow flex-col items-center justify-center gap-y-2.5 self-stretch bg-gray-800 py-16 px-32 min-[1440px]:flex-grow-0 min-[1440px]:flex-row min-[1440px]:flex-wrap min-[1440px]:items-start min-[1440px]:justify-start min-[1440px]:gap-y-9 min-[1440px]:gap-x-9 min-[1440px]:bg-transparent min-[1440px]:pt-0 min-[1440px]:pr-0 min-[1440px]:pl-0 min-[1440px]:pb-0" >
          <div className="flex flex-wrap items-start gap-y-9 gap-x-9 self-stretch pr-16 text-left leading-[normal] text-neutral-100 min-[1440px]:pr-0 min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit] min-[1440px]:[text-align:inherit]" >
            <div className="flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch min-[1440px]:flex-grow-0 min-[1440px]:items-start min-[1440px]:text-left min-[1440px]:leading-[normal] min-[1440px]:text-neutral-100" >
              <div className="flex items-center self-stretch px-16 text-[15px] font-semibold leading-[normal] min-[1440px]:self-auto min-[1440px]:pr-0 min-[1440px]:pl-0" >
                Get in Touch
              </div>
              <div className="flex flex-grow items-start justify-center gap-x-2.5 self-stretch pt-[0.5px] min-[1440px]:items-center min-[1440px]:pt-0 min-[1440px]:text-sm min-[1440px]:font-medium min-[1440px]:leading-[normal]" >
                <div className="flex flex-col items-end justify-center gap-y-3 self-stretch text-[15px] font-semibold leading-[normal] min-[1440px]:items-center min-[1440px]:font-[inherit] min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit]" >
                  <FluentCall16Filled className="h-4 w-4" />
                  <IcRoundEmail className="h-4 w-4" />
                  <FileIconsTelegram className="h-4 w-4" />
                  <CarbonLocationFilled className="h-4 w-4" />
                  <div className="flex items-center self-stretch pt-6 min-[1440px]:hidden" >
                    Subscribe
                  </div>
                </div>
                <div className="flex flex-grow items-center justify-center text-sm font-medium leading-[normal] min-[1440px]:flex-col min-[1440px]:items-start min-[1440px]:gap-y-2.5 min-[1440px]:self-stretch min-[1440px]:font-[inherit] min-[1440px]:leading-[inherit] min-[1440px]:text-[inherit]" >
                  <div className="hidden items-center min-[1440px]:flex">
                    +65 96503241
                  </div>
                  <div className="hidden items-center min-[1440px]:flex">
                    founders@firejet.io
                  </div>
                  <div className="hidden items-center min-[1440px]:flex">
                    @st3vuhn
                  </div>
                  <div className="hidden items-center self-stretch min-[1440px]:flex" >
                    8 Somapah Road, S487372
                  </div>
                  <div className="flex flex-grow flex-col items-start justify-center gap-y-2.5 self-stretch min-[1440px]:hidden" >
                    <div className="flex items-center">+65 96503241</div>
                    <div className="flex items-center">
                      founders@firejet.io
                    </div>
                    <div className="flex items-center">@st3vuhn</div>
                    <div className="flex items-center self-stretch">
                      8 Somapah Road, S487372
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-2.5 min-[1440px]:self-stretch min-[1440px]:text-left min-[1440px]:leading-[normal] min-[1440px]:text-neutral-100" >
              <div className="flex items-center text-[15px] font-semibold leading-[normal]" >
                Links
              </div>
              <div className="flex items-center self-stretch pt-2.5 text-sm font-medium leading-[normal]" >
                Home
              </div>
              <div className="flex items-center text-sm font-medium leading-[normal]" >
                Pricing
              </div>
              <div className="flex items-center self-stretch text-sm font-medium leading-[normal]" >
                About Us
              </div>
              <div className="flex items-center text-sm font-medium leading-[normal]" >
                Blog
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2.5 self-stretch min-[1440px]:flex-grow min-[1440px]:items-start min-[1440px]:justify-center min-[1440px]:self-auto" >
            <div className="flex items-center justify-center self-stretch pt-2.5 text-center text-sm font-medium leading-[normal] text-gray-400 min-[1440px]:justify-start min-[1440px]:text-left min-[1440px]:[order:1]" >
              Get our BEST updates and other cool stuff delivered to your inbox
            </div>
            <div className="flex flex-wrap items-start gap-y-2.5 gap-x-2.5 self-stretch pr-28 text-sm min-[1440px]:[order:2] min-[1440px]:[min-width:74px]" >
              <div className="flex flex-col items-start justify-center gap-y-2.5 self-stretch text-left font-medium leading-[normal]" >
                <div className="flex flex-grow items-center self-stretch rounded-md bg-white py-1.5 pl-3 pr-40 text-gray-400" >
                  Email
                </div>
                <div className="flex items-center text-neutral-100">
                  Set the world on Fire🔥
                </div>
              </div>
              <div className="flex justify-end rounded-md bg-gradient-to-r from-[#F08057] to-[#EEA25C] py-2 px-8 text-right font-bold leading-none text-neutral-100" >
                Sign Up
              </div>
            </div>
            <div className="hidden items-center text-left text-[15px] font-semibold leading-[normal] text-neutral-100 min-[1440px]:order-none min-[1440px]:flex" >
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LandingProps {
  className?: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
