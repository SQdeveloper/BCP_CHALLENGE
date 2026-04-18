import type { ReactNode } from "react";

export const CardBenefits = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex gap-3">
      {icon}
      <div className="text-[16px] text-start">
        <h5 className="font-bold mb-[8px] text-[#002a8d]">{title}</h5>
        <p className="leading-5">{description}</p>
      </div>
    </div>
  );
};
