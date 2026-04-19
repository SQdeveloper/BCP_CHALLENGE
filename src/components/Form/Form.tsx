import { useState } from "react";
import { useTracking } from "../../hooks/useTracking";
import type { FormErrors, FormProps, FormValues } from "./form.types";

const INITIAL_FORM: FormValues = {
  name: "",
  email: "",
};

const INITIAL_ERRORS: FormErrors = {
  name: "",
  email: "",
};

export const Form = ({ variant }: FormProps) => {
  const { trackSubmitForm } = useTracking(variant);

  const [form, setForm] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
    };

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName) {
      newErrors.name = "El nombre es requerido";
    } else if (trimmedName.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(trimmedName)) {
      newErrors.name = "El nombre solo debe contener letras";
    }

    if (!trimmedEmail) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email;
  };

  const handleChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    trackSubmitForm();

    alert("Formulario enviado");
  };

  return (
    <section id="form" className="w-full scroll-mt-10 p-16">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 overflow-hidden rounded-xl">
        <img src="/BCP_CHALLENGE/bg-bcp.png" alt="background de tarjetas bcp" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 bg-[#F3F9FF] px-4 pt-12 text-center"
          noValidate
        >
          <h2 className="text-3xl font-bold text-blue-800">
            Consigue tu tarjeta
          </h2>
          <p className="mb-5">Tarjeta de crédito BCP</p>

          <div className="w-full max-w-[380px] text-start">
            <div className="flex h-12 rounded-md border border-gray-600 bg-white">
              <input
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                className="w-full px-4 outline-none"
                placeholder="Nombre completo"
                autoComplete="name"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-left text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div className="w-full max-w-[380px] text-start">
            <div className="flex h-12 rounded-md border border-gray-600 bg-white">
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className="w-full px-4 outline-none"
                placeholder="Correo electrónico"
                autoComplete="email"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-left text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-3 w-[260px] rounded-full bg-[#ff7800] p-3 font-bold text-white"
          >
            Continuar
          </button>
        </form>
      </div>
    </section>
  );
};
