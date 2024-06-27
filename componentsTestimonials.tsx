import type { NextPage } from "next";
import Testimonio from "testimonio";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[2.5rem] text-black font-p ${className}`}
    >
      <div className="flex-1 rounded-2xl box-border overflow-hidden flex flex-col items-start justify-start pt-[3.875rem] pb-[1.312rem] pr-[3rem] pl-[3.375rem] gap-[4.562rem] max-w-full border-[1px] border-solid border-gris mq750:gap-[2.25rem] mq750:pt-[1.625rem] mq750:box-border mq1100:pt-[2.5rem] mq1100:pb-[1.25rem] mq1100:box-border mq450:gap-[1.125rem] mq1250:pl-[1.688rem] mq1250:pr-[1.5rem] mq1250:box-border">
        <div className="w-[87.875rem] h-[65.688rem] relative rounded-2xl box-border hidden max-w-full border-[1px] border-solid border-gris" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq750:text-[2rem] mq450:text-[1.5rem]">
            Testimonios
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-[1.438rem]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px]">
            <Testimonio />
            <Testimonio />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px]">
            <Testimonio />
            <Testimonio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
