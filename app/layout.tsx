import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EventIves — Create. Connect. Celebrate.',
  description: 'A modern event platform for discovering and creating memorable experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
