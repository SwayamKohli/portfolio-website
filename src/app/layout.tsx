import './globals.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}