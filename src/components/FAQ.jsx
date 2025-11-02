import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this the official Jenny Mod?",
    a: "This is a curated download page that points to a clean, ad-free package of the latest stable release. Always verify checksums and only download from links you trust.",
  },
  {
    q: "How do I install the mod?",
    a: "Install Forge or Fabric for the matching Minecraft version. Place the downloaded .jar file into your Minecraft 'mods' folder, then launch the game with the mod loader profile.",
  },
  {
    q: "Which Minecraft versions are supported?",
    a: "The latest release listed above shows the tested compatibility (e.g., 1.20.x). Older versions may be available on community mirrors.",
  },
  {
    q: "Is it safe?",
    a: "We avoid link shorteners and bundleware. Still, you should verify the SHA-256 checksum and keep your antivirus enabled.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
            <HelpCircle className="h-4 w-4" />
          </span>
          <span className="font-medium text-gray-900">{q}</span>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-sm text-gray-600">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="how-to-install" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">FAQ</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
