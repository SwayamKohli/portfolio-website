'use client';

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function Home() {
  return (
    <>
      {/* Page loader */}
      <div id="page-loader" className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-cyan-400 font-mono text-sm animate-pulse">Loading Portfolio...</div>
        </div>
      </div>

      <main className="bg-black text-white relative overflow-hidden">
        {/* Floating particles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Hero />

          <FadeUp>
            <About />
          </FadeUp>

          <FadeUp delay={0.2}>
            <Projects />
          </FadeUp>

          <FadeUp delay={0.4}>
            <GitHubStats />
          </FadeUp>

          <FadeUp delay={0.6}>
            <Contact />
          </FadeUp>

          <Footer />
        </div>

        {/* Back to top button */}
        <button
          id="back-to-top"
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform translate-y-16 opacity-0 z-40 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }

        #page-loader {
          animation: fadeOut 0.5s ease-in-out 2s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Remove page loader after content loads
          window.addEventListener('load', () => {
            setTimeout(() => {
              const loader = document.getElementById('page-loader');
              if (loader) {
                loader.style.animation = 'fadeOut 0.5s ease-in-out forwards';
              }
            }, 1500);
          });

          // Back to top button functionality
          window.addEventListener('scroll', () => {
            const backToTop = document.getElementById('back-to-top');
            if (backToTop) {
              if (window.scrollY > 300) {
                backToTop.classList.remove('translate-y-16', 'opacity-0');
                backToTop.classList.add('translate-y-0', 'opacity-100');
              } else {
                backToTop.classList.add('translate-y-16', 'opacity-0');
                backToTop.classList.remove('translate-y-0', 'opacity-100');
              }
            }
          });

          // Smooth scroll for all anchor links
          document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
              link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              });
            });
          });
        `
      }} />
    </>
  );
}