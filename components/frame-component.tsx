import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[7.437rem] box-border max-w-full ${className}`}
    >
      <header className="flex-1 bg-white box-border overflow-hidden flex flex-col items-center justify-center pt-[0.843rem] px-[4rem] pb-[0.75rem] max-w-full text-left text-[1.188rem] text-black font-p border-b-[1px] border-solid border-black mq750:pl-[2rem] mq750:pr-[2rem] mq750:box-border">
        <div className="self-stretch flex flex-row items-center justify-center gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <img
              className="h-[2.506rem] w-[4.375rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logogrisclarocf-1.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[2rem]">
            <div className="relative leading-[1.813rem] font-medium inline-block min-w-[6.125rem] whitespace-nowrap">
              Quién Soy
            </div>
            <div className="relative leading-[1.813rem] font-medium inline-block min-w-[5.375rem]">
              Servicios
            </div>
            <div className="h-[1.5rem] w-[4.625rem] relative text-[1rem] leading-[150%] font-text-regular-semi-bold hidden whitespace-nowrap">
              Link Three
            </div>
            <div className="h-[1.5rem] hidden flex-row items-center justify-center gap-[0.25rem] text-[1rem] font-text-regular-semi-bold">
              <div className="self-stretch relative leading-[150%] whitespace-nowrap">
                Link Four
              </div>
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-center max-w-full">
            <button className="cursor-pointer py-[0.375rem] px-[1.187rem] bg-black rounded-2xl flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="relative text-[1.188rem] leading-[1.813rem] font-medium font-p text-white text-left inline-block min-w-[5.563rem]">
                Contacto
              </div>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent;
