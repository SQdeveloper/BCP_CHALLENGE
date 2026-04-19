import { CardBenefits } from "../CardBenefits/CardBenefits";
import { Benefit1 } from "../Icons/benefit1";
import { Benefit2 } from "../Icons/benefit2";
import { Benefit3 } from "../Icons/benefit3";

export const Benefits = () => {
  return (
    <section id="benefits" className="bg-[#F3F9FF] py-16 scroll-mt-32 px-16">
      <div className="max-w-[1200px] mx-auto text-center">
        <h3 className="text-[40px] text-[#002a8d] mb-10 font-bold">
          ¿Qué beneficios te ofrece?
        </h3>
        <div className="flex justify-center items-center gap-4">
          <CardBenefits
            description="Obtén tu tarjeta de crédito por la web sin colas ni papeleos."
            title="Rápido y seguro"
            icon={<Benefit1 />}
          />
          <CardBenefits
            description="¿En agencia, en tu casa o en tu oficina? ¡Tú escoges!"
            title="Personaliza la entrega"
            icon={<Benefit2 />}
          />
          <CardBenefits
            description="Activa tu tarjeta desde el App Banca Móvil BCP."
            title="Úsala de inmediato"
            icon={<Benefit3 />}
          />
        </div>
        <button className="mx-auto mt-16 bg-[#ff7800] font-bold rounded-[24px] flex justify-center items-center w-[180px] h-[40px] text-white">
          Descubre tu oferta
        </button>
      </div>
    </section>
  );
};
