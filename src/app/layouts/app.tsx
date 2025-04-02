import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { AuthProvider } from '@/entity/user';
import { JSX } from 'react';

export default function AppLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <AuthProvider>
      <Header />
      <main className="min-h-max min-w-full">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
