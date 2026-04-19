export const CardPromotion = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
      <img src={url} alt="bg-card-bcp" />
      <div className="flex flex-col p-6 flex-1">
        <div className="text-white rounded-full w-fit bg-blue-800 px-2.5">
          Visa
        </div>
        <h4 className="mt-3 font-bold text-blue-800 text-[18px] flex-1">
          {title}
        </h4>
        <p className="leading-4 mt-1">{description}</p>
        <button className="block mt-5 mx-auto rounded-full py-1 px-3 bg-[#ff7800] text-white font-semibold">
          Descubre tu oferta
        </button>
      </div>
    </div>
  );
};
