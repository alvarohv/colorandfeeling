import type { NextPage } from "next";

export type TestimonioType = {
  className?: string;
};

const Testimonio: NextPage<TestimonioType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[26.313rem] flex-1 relative min-w-[26.313rem] max-w-full z-[1] text-left text-[1.438rem] text-black font-p mq750:min-w-full ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[1.5rem] box-border max-w-full">
        <textarea
          className="bg-white h-[23.313rem] w-auto [outline:none] flex-1 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xl box-border max-w-full border-[1px] border-solid border-black"
          rows={19}
          cols={30}
        />
      </div>
      <div className="absolute h-[67.22%] w-[77.16%] top-[15.44%] right-[11.42%] bottom-[17.34%] left-[11.42%] flex flex-col items-start justify-start gap-[1rem] max-w-full z-[1]">
        <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[6.125rem] mq450:text-[1.125rem]">
          Nombre
        </h3>
        <div className="flex flex-row items-start justify-start gap-[1rem]">
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
            alt=""
            src="/star.svg"
          />
        </div>
        <div className="self-stretch relative text-[1.188rem] leading-[1.7rem] font-medium">
          ¿Te sientes inseguro sobre tu apariencia? ¿Sientes que tu estilo no
          refleja realmente quién eres o que no proyectas la imagen que deseas
          en situaciones sociales y profesionales? No estás solo. Muchas
          personas luchan con la falta de confianza en sí mismas debido a la
          incertidumbre sobre su estilo personal y el miedo al juicio social.
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
