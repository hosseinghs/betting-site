import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Football Match Details',
  description: 'Detailed information about football matches',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gray-50">
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
} 