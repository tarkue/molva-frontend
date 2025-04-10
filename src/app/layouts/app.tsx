import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import { AuthProvider } from '@/entity/user';
import { JSX } from 'react';
import { ThemeProvider } from '@/shared/models/theme-store';

export default function AppLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <main className="min-w-full">{children}</main>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}
