import { useRef } from "react";
import Hero from "./components/Hero";
import DownloadSection from "./components/DownloadSection";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

export default function App() {
  const downloadRef = useRef(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-gray-900">
            Jenny Mod
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a className="hover:text-indigo-600" href="#download">Download</a>
            <a className="hover:text-indigo-600" href="#how-to-install">How to install</a>
          </nav>
          <button
            onClick={scrollToDownload}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
          >
            Get Latest
          </button>
        </div>
      </header>

      <main>
        <Hero onDownloadClick={scrollToDownload} />
        <div ref={downloadRef}>
          <DownloadSection />
        </div>
        <Features />
        <FAQ />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
          This site is a community fan page providing a clean link to the latest release. We do not host or distribute copyrighted game files. Minecraft is a trademark of Mojang AB.
        </div>
      </footer>
    </div>
  );
}
