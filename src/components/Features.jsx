import { Zap, Puzzle, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Immersive content",
    desc: "Experience new interactions and animations that blend into your world.",
  },
  {
    icon: Puzzle,
    title: "Forge/Fabric ready",
    desc: "Compatible with popular mod loaders so you can build your perfect setup.",
  },
  {
    icon: ShieldCheck,
    title: "Curated release",
    desc: "We surface the clean, ad-free package so you avoid shady download sites.",
  },
  {
    icon: Zap,
    title: "Optimized",
    desc: "Lightweight and tuned for smooth performance on modern Minecraft.",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
          Why players love Jenny Mod
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
          Build, explore, and have fun with a community-favorite mod that respects your time.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
