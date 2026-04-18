import type { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
