import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none" />
      
      {/* Mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
