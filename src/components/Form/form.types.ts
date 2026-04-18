export const DOC_RULES = {
  DNI: {
    regex: /\D/g,
    maxLength: 8,
    inputMode: "numeric" as const,
  },
  PASAPORTE: {
    regex: /\D/g,
    maxLength: 12,
    inputMode: "numeric" as const,
  },
  CE: {
    regex: /[^a-zA-Z0-9]/g,
    maxLength: 12,
    inputMode: "text" as const,
  },
};

export type DocType = "DNI" | "PASAPORTE" | "CE";
