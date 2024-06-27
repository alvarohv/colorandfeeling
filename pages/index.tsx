import type { NextPage } from "next";
import Head from "next/head";
import FrameComponent from "../components/frame-component";
import Pricing from "../components/pricing";
import Benefits from "../components/benefits";
import Testimonials from "../Testimonials";
import Footer from "../components/footer";

const DiseoWeb: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border gap-[2.5rem] leading-[normal] tracking-[normal] text-center text-[3.5rem] text-black font-text-regular-semi-bold mq750:gap-[1.25rem]">
      <FrameComponent />
      <section className="w-[87.563rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.25rem] box-border max-w-full text-center text-[4.063rem] text-black font-h1">
        <div className="w-[71.188rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq750:text-[3.25rem] mq450:text-[2.438rem]">
            ¿Te Falta Confianza en Tu Apariencia?
          </h1>
          <div className="w-[67.188rem] flex flex-row items-start justify-start py-[0rem] px-[4.812rem] box-border max-w-full text-[1.188rem] font-p mq1100:pl-[2.375rem] mq1100:pr-[2.375rem] mq1100:box-border">
            <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
              No estás sol@. Muchas personas luchan con la falta de confianza en
              sí mismas debido a la incertidumbre sobre su estilo personal y el
              miedo al juicio social.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[40.625rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.25rem] box-border max-w-full">
        <div className="self-stretch w-[77.5rem] relative rounded-2xl bg-gainsboro max-w-full" />
      </section>
      <Pricing />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.5rem] box-border max-w-full text-center text-[3rem] text-black font-h1">
        <div className="w-[48rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] font-bold font-inherit mq750:text-[2.375rem] mq450:text-[1.813rem]">
            ¿Este Servicio es para Ti, Si...
          </h1>
          <div className="self-stretch relative text-[1.188rem] leading-[150%] font-medium font-p">
            ¿Te sientes inseguro/a sobre qué ropa refleja mejor tu personalidad
            y estilo? ¿Tienes dificultades para encontrar ropa que realmente te
            quede bien y resalte tus mejores atributos? ¿Te resulta complicado
            seleccionar colores que te favorezcan y te hagan sentir seguro/a?
            ¿Gastas dinero en ropa que luego no usas y te arrepientes de
            comprar? ¿Tu armario está lleno de prendas que no usas, y te cuesta
            encontrar combinaciones que te hagan sentir bien?
          </div>
        </div>
      </section>
      <Benefits />
      <div className="self-stretch hidden flex-col items-start justify-start py-[2rem] px-[1rem] relative gap-[0.625rem]">
        <div className="self-stretch h-[29.688rem] relative rounded-2xl bg-acento z-[0]" />
        <b className="w-[31.75rem] h-[6.188rem] absolute !m-[0] top-[8.313rem] left-[29.063rem] leading-[120%] inline-block z-[1] mq750:text-[2.813rem] mq750:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.5rem]">{`¿Lo necesitas? `}</b>
        <div className="w-[31.125rem] !m-[0] absolute top-[19.188rem] left-[29.75rem] rounded-2xl bg-black box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] whitespace-nowrap z-[2] text-left text-[1rem] text-white border-[1px] border-solid border-black">
          <div className="relative leading-[150%]">COMPRALO AQUÍ</div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.25rem] pb-[1.25rem] box-border max-w-full text-center text-[2.5rem] text-black font-p">
        <div className="flex-1 rounded-2xl bg-gris overflow-hidden flex flex-row items-start justify-between py-[3.75rem] pr-[5.125rem] pl-[6.25rem] box-border max-w-full gap-[1.25rem] mq750:pl-[1.563rem] mq750:box-border mq1100:pt-[2.438rem] mq1100:pb-[2.438rem] mq1100:box-border mq450:pt-[1.563rem] mq450:pb-[1.563rem] mq450:box-border mq1250:flex-wrap mq1250:pl-[3.125rem] mq1250:pr-[2.563rem] mq1250:box-border">
          <div className="w-[27.688rem] flex flex-col items-start justify-start pt-[17.156rem] px-[0rem] pb-[0rem] box-border min-w-[27.688rem] max-w-full mq750:pt-[11.125rem] mq750:box-border mq750:min-w-full mq1250:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit mq750:text-[2rem] mq450:text-[1.5rem]">
                Quién Soy?
              </h1>
              <h3 className="m-0 self-stretch relative text-[1.438rem] leading-[2.25rem] font-medium font-inherit text-left mq450:text-[1.125rem] mq450:leading-[1.813rem]">
                En nuestra Consultoría de Imagen, ofrecemos cuatro sesiones para
                mejorar tu apariencia. Te ayudamos a sentirte confiado y
                auténtico en cada paso.
              </h3>
            </div>
          </div>
          <div className="h-[50.125rem] w-[35.313rem] relative rounded-2xl bg-gris-2 min-w-[35.313rem] max-w-full mq1100:min-w-full mq1250:flex-1" />
        </div>
      </section>
      <Testimonials />
      <div className="w-[87.125rem] h-[48.438rem] rounded-2xl box-border overflow-hidden shrink-0 hidden flex-col items-start justify-between py-[2rem] px-[0rem] relative max-w-full text-[2.5rem] font-p border-[1px] border-solid border-gris">
        <div className="w-[67.625rem] h-[40.938rem] absolute !m-[0] top-[4.438rem] left-[9.75rem] max-w-full z-[0]">
          <div className="absolute top-[0rem] left-[5.688rem] w-[56.25rem] flex flex-col items-center justify-start gap-[1rem] max-w-full">
            <div className="self-stretch h-[3.063rem] relative font-semibold inline-block mq750:text-[2rem] mq450:text-[1.5rem]">{`¿Que recibirás en este Servicio? `}</div>
            <div className="self-stretch h-[4.5rem] relative text-[1.438rem] leading-[2.25rem] font-medium hidden mq450:text-[1.125rem] mq450:leading-[1.813rem]">
              En nuestra Consultoría de Imagen, ofrecemos cuatro sesiones para
              mejorar tu apariencia. Te ayudamos a sentirte confiado y auténtico
              en cada paso.
            </div>
          </div>
          <div className="absolute top-[8.063rem] left-[0rem] w-full h-[32.875rem] text-left text-[1.75rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[31.313rem] h-[13.875rem]">
              <div className="absolute top-[0rem] left-[0.063rem] font-semibold mq450:text-[1.375rem]">
                Sesión 1
              </div>
              <b className="absolute top-[3.625rem] left-[0.063rem] text-[1.438rem] mq450:text-[1.125rem]">
                Análisis de Estilo
              </b>
              <div className="absolute top-[6.375rem] left-[0.063rem] text-[1rem] leading-[150%] font-medium text-gris-2 inline-block w-[31.25rem]">
                Descubriremos cuál es tu estilo personal. Es como cuando eliges
                tu ropa favorita para ir a una fiesta. ¿Te gusta vestir con
                colores brillantes o prefieres algo más sencillo? Yo te ayudo a
                encontrar lo que mejor te queda y lo que más te gusta para que
                siempre te sientas feliz con lo que llevas puesto.
              </div>
              <div className="absolute top-[2.563rem] left-[0rem] box-border w-[31.375rem] h-[0.125rem] border-t-[2px] border-solid border-gray" />
            </div>
            <div className="absolute top-[17.625rem] left-[0rem] w-[31.313rem] h-[13.875rem]">
              <div className="absolute top-[0rem] left-[0.063rem] font-semibold mq450:text-[1.375rem]">
                Sesión 3
              </div>
              <b className="absolute top-[3.625rem] left-[0.063rem] text-[1.438rem] mq450:text-[1.125rem]">
                Guía para Compras Conscientes
              </b>
              <div className="absolute top-[6.375rem] left-[0.063rem] text-[1rem] leading-[150%] font-medium text-gris-2 inline-block w-[31.25rem]">
                ¿Alguna vez has ido de compras y no sabías qué elegir? En esta
                sesión, te enseñamos a comprar de manera inteligente. Te
                ayudamos a escoger la ropa que realmente necesitas y que te
                encanta, para no gastar dinero en cosas que no vas a usar. Es
                como tener un súper poder para siempre elegir lo mejor y no
                desperdiciar nada.
              </div>
              <div className="absolute top-[2.563rem] left-[0rem] box-border w-[31.375rem] h-[0.125rem] border-t-[2px] border-solid border-gray" />
            </div>
            <div className="absolute top-[17.625rem] left-[36.313rem] w-[31.313rem] h-[13.875rem]">
              <div className="absolute top-[0rem] left-[0.063rem] font-semibold mq450:text-[1.375rem]">
                Sesión 4
              </div>
              <b className="absolute top-[3.625rem] left-[0.063rem] text-[1.438rem] mq450:text-[1.125rem]">{`Closet Inteligente & Consultas`}</b>
              <div className="absolute top-[6.375rem] left-[0.063rem] text-[1rem] leading-[150%] font-medium text-gris-2 inline-block w-[31.25rem]">
                <p className="m-0">{`En esta sesión, te ayudo a organizar tu armario. Es como cuando revisas tus fotos, decides cuáles guardar y cuáles eliminar. `}</p>
                <p className="m-0">{`Nos deshacemos de la ropa que ya no necesitas, dejamos solo lo que realmente te gusta y te queda bien. `}</p>
                <p className="m-0">Además, resolveremos dudas.</p>
              </div>
              <div className="absolute top-[2.563rem] left-[0rem] box-border w-[31.375rem] h-[0.125rem] border-t-[2px] border-solid border-gray" />
            </div>
            <div className="absolute top-[0rem] left-[36.313rem] w-[31.313rem] h-[13.875rem]">
              <div className="absolute top-[0rem] left-[0.063rem] font-semibold mq450:text-[1.375rem]">
                Sesión 2
              </div>
              <b className="absolute top-[3.625rem] left-[0.063rem] text-[1.438rem] mq450:text-[1.125rem]">{`Análisis de Color & Silueta`}</b>
              <div className="absolute top-[6.375rem] left-[0.063rem] text-[1rem] leading-[150%] font-medium text-gris-2 inline-block w-[31.25rem]">
                <p className="m-0">{`Aquí, vemos qué colores te hacen ver y sentir increíble. Es como cuando pruebas distintos sabores de helado para encontrar tu favorito. `}</p>
                <p className="m-0">
                  También descubrimos qué tipo de ropa se ve mejor en tu cuerpo,
                  ya sea ropa ajustada, suelta, larga o corta.
                </p>
              </div>
              <div className="absolute top-[2.563rem] left-[0rem] box-border w-[31.375rem] h-[0.125rem] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiseoWeb;
