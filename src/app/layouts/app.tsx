import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import { AuthProvider, UserProvider } from '@/entity/user';
import { ThemeProvider } from '@/shared/models/theme-store';
import { Toaster } from '@/shared/ui/toast';
import { ModalProvider } from '@/shared/ui/modal';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <ModalProvider>
              <Header />
              <main className="flex min-w-full min-h-[calc(100dvh-130px)]">
                {children}
              </main>
              <Footer />
              <Toaster />
            </ModalProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
