import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-hex">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
