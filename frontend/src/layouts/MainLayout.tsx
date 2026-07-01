import type { ReactNode } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}