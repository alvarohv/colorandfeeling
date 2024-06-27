import type { NextPage } from "next";
import BenefitsListItem from "./benefits-list-item";

export type BenefitsType = {
  className?: string;
};

const Benefits: NextPage<BenefitsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.25rem] pb-[1.25rem] box-border max-w-full text-center text-[3rem] text-black font-h1 ${className}`}
    >
      <div className="flex-1 rounded-2xl bg-gris overflow-hidden flex flex-col items-center justify-start py-[7rem] px-[1.25rem] box-border gap-[5rem] max-w-full mq750:gap-[1.25rem] mq1100:pt-[4.563rem] mq1100:pb-[4.563rem] mq1100:box-border mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1250:gap-[2.5rem]">
        <div className="w-[65.813rem] flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-bold font-inherit mq750:text-[2.375rem] mq450:text-[1.813rem]">
              ¿Que vas a Recibir?
            </h1>
            <div className="self-stretch relative text-[1.188rem] leading-[1.813rem] font-medium font-p">
              Con nuestro servicio, tendrás más confianza, serás tú mismo y te
              sentirás feliz todos los días.
            </div>
          </div>
        </div>
        <div className="w-[70rem] flex flex-row items-center justify-start max-w-full text-left text-[1.438rem] font-p mq750:gap-[1.25rem] mq1250:gap-[2.5rem]">
          <div className="flex-1 flex flex-col items-start justify-start py-[0.5rem] px-[0rem] box-border gap-[2rem] max-w-full mq750:gap-[1rem]">
            <BenefitsListItem
              heading="Descubre tu Estilo "
              listDescription="Define un estilo que refleja tu personalidad, haciéndote sentir cómoda(o) y auténtica(o)."
            />
            <BenefitsListItem
              heading="Conoce tu Tipo de Cuerpo"
              listDescription="Descubre tu tipo de cuerpo para saber qué ropa te queda mejor."
              propWidth="82rem"
              propAlignSelf="unset"
            />
            <BenefitsListItem
              heading="Colores y Ropa que favorecen"
              listDescription="Aprende a elegir colores , ropa que realzan tus mejores características y te hacen sentir con confianza."
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <BenefitsListItem
              heading="Compras Conscientes"
              listDescription="Compra solo lo necesario, ahorrando tiempo y dinero."
              propWidth="unset"
              propAlignSelf="stretch"
            />
            <BenefitsListItem
              heading="Armario Inteligente"
              listDescription="Tendrás un closet inteligente usando básicos y así crear combinaciones infinitas. "
              propWidth="unset"
              propAlignSelf="stretch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
