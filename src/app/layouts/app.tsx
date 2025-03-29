import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { JSX } from 'react';

export default function AppLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <Header />
      <main className="min-h-max min-w-full">{children}</main>
      <Footer />
    </>
  );
}
