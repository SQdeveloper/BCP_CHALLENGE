export const Footer = () => {
  return (
    <footer className="py-8 text-[#868f9e] text-[14px] border-t-2 border-gray-300">
      <div className="max-w-[1200px] mx-auto flex justify-center gap-4">
        <div className="flex flex-col items-start">
          <img
            className="w-[68px]"
            alt="BCP"
            loading="lazy"
            src="https://acdneu2xt21p01ecdn01.azureedge.net/assets/img/logos/bcp-dark-grey.svg"
          />
          <p className="w-fit  text-pretty">
            ©2026 BCP (01) 311-9898 | Sede Central, Centenario 156, La Molina
            15026, Lima, Perú. BANCO DE CREDITO DEL PERU S.A - RUC 20100047218
          </p>
        </div>
        <div className="bg-gray-400 w-px h-10" />
        <div>
          <div className="block">Buzón de consultas:</div>
          <p>atenciontarjetasonline@bcp.com.pe</p>
        </div>
      </div>
    </footer>
  );
};
