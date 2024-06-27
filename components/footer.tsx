import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-negro overflow-hidden flex flex-col items-start justify-start py-[3.75rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[1rem] text-black font-text-regular-semi-bold mq750:gap-[2.5rem] mq750:pl-[2rem] mq750:pr-[2rem] mq750:box-border mq450:gap-[1.25rem] ${className}`}
    >
      <div className="w-[4.188rem] relative leading-[150%] font-semibold hidden">
        Link Four
      </div>
      <div className="w-[4rem] relative leading-[150%] font-semibold hidden">
        Link Five
      </div>
      <img
        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--facebook.svg"
      />
      <img
        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--x.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1.188rem] text-white font-p mq750:flex-wrap">
        <div className="h-[3.125rem] w-[6rem] flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/logogrisclarocf-1-1.svg"
          />
        </div>
        <div className="w-[21.063rem] flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[2rem] mq450:flex-wrap mq450:gap-[1rem]">
            <div className="flex-1 relative leading-[1.813rem] font-medium inline-block min-w-[4rem]">
              Quién Soy
            </div>
            <div className="relative leading-[1.813rem] font-medium inline-block min-w-[5.375rem]">
              Servicios
            </div>
            <div className="flex-1 relative leading-[1.813rem] font-medium inline-block min-w-[3.625rem]">
              Contacto
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0.75rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
              alt=""
              src="/icon--instagram.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
              alt=""
              src="/icon--linkedin.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
              alt=""
              src="/icon--youtube.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-white font-p mq750:gap-[1rem]">
        <div className="self-stretch h-[0.063rem] relative bg-white" />
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[44.938rem] flex flex-row flex-wrap items-start justify-start gap-[1.5rem] max-w-full">
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[6.875rem]">{`2024 Color & Feeling`}</div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[7.125rem]">
              Política de Privacidad
            </div>
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[6.875rem]">
              Términos de Servicio
            </div>
            <div className="relative leading-[150%] font-medium">
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
