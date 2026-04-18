import { useScrollHeader } from "../../hooks/useScrollHeader";

export const Header = () => {
  const scrolled = useScrollHeader({ threshold: 100 });

  return (
    <header
      className={`transition-all duration-300 ${scrolled ? "bg-[#002a8d]" : "bg-transparent"} text-white fixed top-0 left-0 z-50 p-4 w-full`}
    >
      <div className="flex justify-between max-w-[1200px] w-full mx-auto">
        <div className="flex gap-4 items-center">
          <img
            className="w-[98px] h-[24px]"
            src="https://www.viabcp.com/wcm/connect/c73d6c4d-0631-478a-9b75-30582912ad25/Frame.svg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE-c73d6c4d-0631-478a-9b75-30582912ad25-oEzCTbH&amp;cache=none"
            alt="BCP"
          />
          <div className="bg-white w-px h-6"></div>
          <div>Tarjeta de Crédito</div>
        </div>
        <div>
          <ul className="flex ">
            <li className="py-[14px] px-5">
              <a href="#about">¿Cómo sacar una tarjeta?</a>
            </li>
            <li className="py-[14px] px-5">
              <a href="#benefits">Beneficios</a>
            </li>
            <li className="py-[14px] px-5">
              <a href="#questions">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
