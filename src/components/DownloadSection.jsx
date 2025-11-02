import { Download, FileBadge, Shield, Server, Hash } from "lucide-react";

const latestRelease = {
  version: "v1.3.2",
  game: "Minecraft 1.20.x",
  date: "Oct 2025",
  size: "12.4 MB",
  sha256: "a1c9...f39b",
  primaryUrl: "https://example.com/jenny-mod/latest/jenny-mod-v1.3.2.jar",
  mirrorUrl: "https://mirror.example.com/jenny-mod/jenny-mod-v1.3.2.jar",
};

export default function DownloadSection() {
  const handlePrimaryDownload = () => {
    window.location.href = latestRelease.primaryUrl;
  };

  return (
    <section id="download" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Download the latest version
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Always verify file checksums and only download from trusted sources.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileBadge className="h-4 w-4" />
                  Stable release
                </div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  Jenny Mod {latestRelease.version}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Compatible with {latestRelease.game} • Updated {latestRelease.date}
                </p>
              </div>
              <button
                onClick={handlePrimaryDownload}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Download className="h-5 w-5" />
                Download .jar
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Server className="h-4 w-4" />
                  Primary CDN
                </div>
                <a
                  className="mt-1 block truncate text-sm text-indigo-600 hover:underline"
                  href={latestRelease.primaryUrl}
                >
                  {latestRelease.primaryUrl}
                </a>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Server className="h-4 w-4" />
                  Mirror
                </div>
                <a
                  className="mt-1 block truncate text-sm text-indigo-600 hover:underline"
                  href={latestRelease.mirrorUrl}
                >
                  {latestRelease.mirrorUrl}
                </a>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Hash className="h-4 w-4" />
                  Checksum (SHA-256)
                </div>
                <p className="mt-1 select-all text-sm font-mono text-gray-600">
                  {latestRelease.sha256}
                </p>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">File size: {latestRelease.size}</div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-800">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Safety tips</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Back up your worlds before installing.</li>
              <li>• Download from trusted links only.</li>
              <li>• Verify the checksum after download.</li>
              <li>• Never run installers that ask for admin access.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
