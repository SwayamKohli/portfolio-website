import './globals.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Swayam Kohli - Full Stack Developer & IT Student" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white transition-all duration-500 font-['Inter'] antialiased overflow-x-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </div>

        {/* Scroll indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-50 transform -translate-x-full transition-transform duration-300 ease-out" id="scroll-progress"></div>

        {/* Custom cursor for desktop */}
        <div className="hidden lg:block fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference" id="cursor">
          <div className="w-full h-full bg-white rounded-full opacity-50 scale-0 transition-all duration-300"></div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
            // Scroll progress indicator
            window.addEventListener('scroll', () => {
              const scrollProgress = document.getElementById('scroll-progress');
              const scrollTop = document.documentElement.scrollTop;
              const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrollPercent = (scrollTop / scrollHeight) * 100;
              if (scrollProgress) {
                scrollProgress.style.transform = \`translateX(\${scrollPercent - 100}%)\`;
              }
            });

            // Custom cursor
            const cursor = document.getElementById('cursor');
            if (cursor) {
              document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - 12 + 'px';
                cursor.style.top = e.clientY - 12 + 'px';
              });

              document.addEventListener('mouseenter', () => {
                cursor.children[0].style.transform = 'scale(1)';
              });

              document.addEventListener('mouseleave', () => {
                cursor.children[0].style.transform = 'scale(0)';
              });

              // Scale up on hover over interactive elements
              const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
              interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                  cursor.children[0].style.transform = 'scale(2)';
                  cursor.children[0].style.opacity = '0.3';
                });
                el.addEventListener('mouseleave', () => {
                  cursor.children[0].style.transform = 'scale(1)';
                  cursor.children[0].style.opacity = '0.5';
                });
              });
            }
          `
        }} />
      </body>
    </html>
  );
}