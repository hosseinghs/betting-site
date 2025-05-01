import type { Metadata } from 'next';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: 'Football Match Details',
  description: 'Detailed information about football matches',
};

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
} 