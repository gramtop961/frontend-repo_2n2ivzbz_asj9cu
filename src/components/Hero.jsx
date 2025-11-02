import { Download, ShieldCheck } from "lucide-react";

export default function Hero({ onDownloadClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-fuchsia-600/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            <ShieldCheck className="h-4 w-4" />
            Safe • Curated release
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Jenny Mod
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            The fan-favorite Minecraft mod. Download the latest stable release with
            one click and start your adventure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Download className="h-5 w-5" />
              Download Latest
            </button>
            <a
              href="#how-to-install"
              className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-indigo-700 ring-1 ring-inset ring-indigo-200 transition hover:bg-indigo-50"
            >
              How to install
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
