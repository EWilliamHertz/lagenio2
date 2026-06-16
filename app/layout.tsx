import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lagenio - Premium Swedish Phone Store',
  description: 'Discover Lagenio phones - State-of-the-art Chinese technology trusted by Europeans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
