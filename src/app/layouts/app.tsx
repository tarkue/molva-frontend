import { UserProvider } from '@/entity/user';
import { Metrics } from '@/features/metrics';
import { ThemeProvider } from '@/shared/models/theme-store';
import { ModalProvider } from '@/shared/ui/modal';
import { Toaster } from '@/shared/ui/toast';
import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
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
    <>
      <Metrics />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
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
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
