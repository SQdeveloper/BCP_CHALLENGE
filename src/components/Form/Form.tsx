import { useState } from "react";
import type { BannerType } from "../../types/experiment.types";
import { useTracking } from "../../hooks/useTracking";
import { DOC_RULES, type DocType } from "./form.types";

export const Form = ({ variant }: { variant: BannerType }) => {
  const { trackSubmitForm } = useTracking(variant);

  const [form, setForm] = useState<{
    docType: DocType;
    docNumber: string;
    code: string;
  }>({
    docType: "DNI",
    docNumber: "",
    code: "",
  });

  const [errors, setErrors] = useState({
    docNumber: "",
    code: "",
  });

  const validate = () => {
    const newErrors = {
      docNumber: "",
      code: "",
    };

    if (!form.docNumber) {
      newErrors.docNumber = "El documento es requerido";
    } else if (!/^\d{8,12}$/.test(form.docNumber)) {
      newErrors.docNumber = "Debe tener entre 8 y 12 dígitos";
    }

    if (!form.code) {
      newErrors.code = "El código es requerido";
    } else if (form.code.length < 4) {
      newErrors.code = "Código inválido";
    }

    setErrors(newErrors);

    return !newErrors.docNumber && !newErrors.code;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    trackSubmitForm();

    alert("Formulario enviado 🚀");
  };

  const handleDocChange = (value: string) => {
    const rule = DOC_RULES[form.docType];

    let sanitized = value.replace(rule.regex, "");
    sanitized = sanitized.slice(0, rule.maxLength);

    setForm((prev) => ({
      ...prev,
      docNumber: sanitized,
    }));
  };

  return (
    <section id="form" className="p-16 scroll-mt-10 w-full">
      <div className="rounded-xl overflow-hidden mx-auto grid grid-cols-2 w-full max-w-[1200px]">
        <img src="./src/assets/bg-bcp.png" alt="background de tarjetas bcp" />

        <form
          onSubmit={handleSubmit}
          className="bg-[#F3F9FF] pt-12 flex items-center text-center flex-col gap-4 px-4"
        >
          <h2 className="font-bold text-blue-800 text-3xl">Cards</h2>
          <p className="mb-5">Tarjeta de crédito BCP</p>

          <div className="w-full max-w-[380px]">
            <div className="h-12 flex bg-white border border-gray-600 rounded-md">
              <select
                value={form.docType}
                onChange={(e) =>
                  setForm({ ...form, docType: e.target.value as DocType })
                }
                className="px-2 outline-none"
              >
                <option value="DNI">DNI</option>
                <option value="PASAPORTE">PASAPORTE</option>
                <option value="CE">CE</option>
              </select>

              <input
                type="text"
                value={form.docNumber}
                onChange={(e) => handleDocChange(e.target.value)}
                inputMode={DOC_RULES[form.docType].inputMode}
                maxLength={DOC_RULES[form.docType].maxLength}
                className="flex-1 outline-none border-l px-4"
                placeholder="Nro de documento"
              />
            </div>

            {errors.docNumber && (
              <p className="text-red-500 text-sm text-left mt-1">
                {errors.docNumber}
              </p>
            )}
          </div>

          <div className="w-full max-w-[380px] text-start">
            <div className="h-12 flex border border-gray-600 rounded-md">
              <img
                className="h-full"
                src="./src/assets/code.png"
                alt="código"
              />

              <input
                type="text"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                className="outline-none border-l px-4 w-full"
                placeholder="Código"
              />
            </div>

            {errors.code && (
              <p className="text-red-500 text-sm text-left mt-1">
                {errors.code}
              </p>
            )}

            <button
              type="button"
              className="font-bold text-sm text-orange-500 mt-1"
            >
              Cambiar Código
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#ff7800] text-white p-3 rounded-full w-[260px] font-bold mt-3"
          >
            Continuar
          </button>
        </form>
      </div>
    </section>
  );
};
