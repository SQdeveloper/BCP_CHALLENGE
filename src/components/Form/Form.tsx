import type { FormEvent } from "react";
import type { BannerType } from "../../types/experiment.types";
import { useTracking } from "../../hooks/useTracking";

export const Form = ({ variant }: { variant: BannerType }) => {
  const { trackSubmitForm } = useTracking(variant);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trackSubmitForm();
    alert("Formulario enviado");
  };

  return (
    <section id="form" className="p-16 scroll-mt-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />

        <button type="submit" className="bg-blue-600 text-white p-3">
          Enviar
        </button>
      </form>
    </section>
  );
};
