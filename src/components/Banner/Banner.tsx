import type { BannerProps, BannerType } from "../../types/experiment.types";

export const Banner = ({ config }: BannerProps) => {
  const variantStyles: Record<BannerType, string> = {
    A: "bg-bcp-gradient-blue",
    B: "bg-bcp-gradient-orange",
  };

  const variantTextButton: Record<BannerType, string> = {
    A: "Solicita ahora",
    B: "Aplica ya",
  };

  return (
    <section
      className={`${variantStyles[config.variant]} w-full h-svh flex justify-center`}
    >
      <div className="flex justify-center items-center h-full gap-4 max-w-[1200px] w-full">
        <div className="flex flex-col text-white w-[50%]">
          <h1 className="leading-[64px] text-[56px] mb-[16px] mt-[30px] font-bold text-balance">
            Pide tu Tarjeta de Crédito BCP
          </h1>
          <p className="text-[24px]">Hazlo en segundos desde la web</p>
          <div className="mt-[16px] bg-[#ff7800] font-bold rounded-[24px] flex justify-center items-center w-[180px] h-[40px] text-white">
            {variantTextButton[config.variant]}
          </div>
        </div>
        <div>
          <picture>
            <img
              className="w-[327px] mt-[30px]"
              src="https://www.viabcp.com/wcm/connect/83388ca2-131a-427a-9ec7-a2b4c02d21b5/banner-experimento-640x640-px_tcs.png?MOD=AJPERES&amp;attachment=false&amp;id=1746222898342"
              alt="imagen tarjetas de credito bcp"
            />
          </picture>
        </div>
      </div>
      <div className="absolute top-28 left-[70%] bg-black p-2">
        <img
          src="https://www.viabcp.com/wcm/connect/5625ce14-09b0-4cf9-b285-540810fcd6c4/logos+billeteras.png?MOD=AJPERES&amp;attachment=false&amp;id=1717599643476"
          width="96px"
        ></img>
      </div>
    </section>
  );
};
