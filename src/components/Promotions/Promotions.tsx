import { CardPromotion } from "../CardPromotion/CardPromotion";

export const Promotions = () => {
  return (
    <section id="promotion" className="my-20 px-16 scroll-mt-40">
      <div className="mx-auto max-w-[900px]">
        <h3 className="text-center mb-12 text-4xl font-bold text-blue-800">
          Conoce todas nuestras promociones
        </h3>
        <div className="flex gap-8">
          <CardPromotion
            description="En más de 4,000 establecimientos para esa compra de tus sueños."
            title="Hasta 24 Cuotas Sin Intereses"
            url="https://www.viabcp.com/wcm/connect/1ebbdeb2-40be-4276-9ce1-653873e0aac2/Redisen%CC%83o-home-de-cards_Card-CSI.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-1ebbdeb2-40be-4276-9ce1-653873e0aac2-oVQ8uYX&cache=none"
          />
          <CardPromotion
            description="Paga tus compras con puntos en los comercios afiliados."
            title="Canjea tus Puntos Qore"
            url="https://www.viabcp.com/wcm/connect/5b7b8b7a-1111-4597-b9df-bb94c735793f/Card-Puntos-Qore_900x383px.png?MOD=AJPERES&attachment=false&id=1746222832055"
          />
          <CardPromotion
            description="Como en Amazon, Plaza Vea, Mercado Libre, eBay y Ripley"
            title="Canjea millas en las mejores tiendas"
            url="https://www.viabcp.com/wcm/connect/6d842b9a-8f1b-4816-a4a3-eed251d80427/Redisen%CC%83o-home-de-cards-Card-Rewards.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-6d842b9a-8f1b-4816-a4a3-eed251d80427-oVQ8GVi&cache=none"
          />
        </div>
      </div>
    </section>
  );
};
