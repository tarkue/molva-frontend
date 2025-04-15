import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import { AuthProvider } from '@/entity/user';
import { ThemeProvider } from '@/shared/models/theme-store';
import { Toaster } from '@/shared/ui/toast';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <main className="flex min-w-full min-h-[calc(100dvh-130px)]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}
