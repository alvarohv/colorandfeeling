import type { NextPage } from "next";

export type PricingType = {
  className?: string;
};

const Pricing: NextPage<PricingType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.062rem] pb-[2.5rem] box-border max-w-full text-center text-[3rem] text-black font-h1 ${className}`}
    >
      <div className="flex-1 rounded-2xl bg-gris flex flex-col items-center justify-start pt-[3.375rem] pb-[6.062rem] pr-[1.25rem] pl-[3.375rem] box-border gap-[3.875rem] max-w-full mq750:pt-[1.438rem] mq750:pb-[2.563rem] mq750:box-border mq1100:gap-[1.938rem] mq1100:pl-[1.688rem] mq1100:pt-[2.188rem] mq1100:pb-[3.938rem] mq1100:box-border mq450:gap-[0.938rem]">
        <div className="w-[87.875rem] h-[62.938rem] relative rounded-2xl bg-gris hidden max-w-full" />
        <div className="w-[48rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-bold font-inherit z-[1] mq750:text-[2.375rem] mq450:text-[1.813rem]">
            Inversión del Servicio
          </h1>
          <div className="self-stretch relative text-[1.188rem] leading-[150%] font-medium font-p z-[1]">
            Con nuestro servicio, te verás mejor, tendrás más confianza, serás
            tú mismo y te sentirás feliz todos los días.
          </div>
        </div>
        <div className="w-[48rem] flex flex-row items-start justify-center max-w-full text-[1.438rem] font-p">
          <div className="w-[35rem] rounded-2xl box-border flex flex-col items-start justify-start py-[2rem] px-[1.937rem] gap-[1.937rem] max-w-full z-[1] border-[1px] border-solid border-black mq750:gap-[0.938rem] mq750:pt-[1.313rem] mq750:pb-[1.313rem] mq750:box-border">
            <div className="self-stretch flex flex-row items-start justify-center">
              <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.125rem]">{`Estilo & Poder`}</h3>
            </div>
            <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-black" />
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] text-[3.5rem]">
              <b className="relative whitespace-nowrap mq750:text-[2.813rem] mq450:text-[2.125rem]">
                $499
              </b>
            </div>
            <div className="self-stretch h-[3.063rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border max-w-full">
              <button className="cursor-pointer py-[0.75rem] px-[1.25rem] bg-black h-[2.875rem] flex-1 rounded-2xl box-border flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-black hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                <div className="relative text-[1rem] leading-[1.25rem] font-medium font-p text-white text-left inline-block min-w-[5.438rem]">
                  COMPRAR
                </div>
              </button>
            </div>
            <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-black" />
            <div className="self-stretch flex flex-col items-start justify-start py-[0.5rem] px-[0rem] gap-[1rem] text-left text-[1rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Análisis de Estilo
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Análisis de Color y Silueta
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Guía para Compras Inteligentes
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Limpieza de Armario
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium inline-block min-w-[5.313rem]">{`4 sesiones `}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium inline-block min-w-[7.813rem]">
                  Material Digital
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/check.svg"
                />
                <div className="relative leading-[150%] font-medium inline-block min-w-[5.188rem]">{`App móvil `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
