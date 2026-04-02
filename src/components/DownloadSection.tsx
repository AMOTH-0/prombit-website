import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Tag,
  Clock,
  FileText,
  CheckCircle2,
  Monitor,
  AlertCircle,
} from "lucide-react";

// ─── Config ────────────────────────────────────────────────────────────────────
const GITHUB_OWNER = "your-github-username";
const GITHUB_REPO  = "prombit-desktop";
const APP_IS_RELEASED = false;
// ───────────────────────────────────────────────────────────────────────────────

interface ReleaseData {
  version: string;
  title: string;
  date: string;
  changelog: string[];
  downloadUrl: string;
  sizeMb: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatMb(bytes: number): string {
  return (bytes / 1_048_576).toFixed(1) + " MB";
}

function parseChangelog(body: string): string[] {
  return body
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim())
    .filter(Boolean)
    .slice(0, 6);
}

// ─── Coming Soon state ─────────────────────────────────────────────────────────
const ComingSoon = () => (
  <Section className="relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.05),transparent_50%)]" />
    <div className="relative">
      <SectionHeading
        badge="Download"
        title="Download Prombit Desktop"
        description="The Windows installer will appear here the moment we ship."
      />
      <div className="mx-auto max-w-lg">
        <div className="rounded-2xl border border-border bg-card p-8 opacity-60">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <Monitor className="h-7 w-7 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Prombit Desktop</p>
              <p className="text-sm text-muted-foreground">Windows · Not yet released</p>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            {["Version info", "Release date", "Changelog"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="text-sm text-muted-foreground/50">{item} — coming soon</span>
              </div>
            ))}
          </div>
          <Button variant="hero" className="w-full" disabled>
            <Download className="mr-2 h-4 w-4" /> Download .exe
          </Button>
        </div>
        <div className="mt-6 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Want early access? Join the waitlist and we'll notify you on launch day.
          </p>
          <Link to="/contact">
            <Button variant="hero-outline" size="sm">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

// ─── Skeleton shimmer ──────────────────────────────────────────────────────────
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-muted/50 ${className ?? ""}`} />
);

const LoadingSkeleton = () => (
  <Section className="relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.05),transparent_50%)]" />
    <div className="relative">
      <SectionHeading
        badge="Download"
        title="Download Prombit Desktop"
        description="Fetching the latest release…"
      />
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-gradient-card p-8">
        <div className="mb-6 flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-xl" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-28" />
        </div>
        <div className="mb-6 space-y-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-3 w-full" />
          ))}
          <Skeleton className="h-3 w-3/4" />
        </div>
        <Skeleton className="h-11 w-full rounded-xl" />
      </div>
    </div>
  </Section>
);

// ─── Loaded state ──────────────────────────────────────────────────────────────
const ReleaseCard = ({ release }: { release: ReleaseData }) => (
  <Section className="relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.05),transparent_50%)]" />
    <div className="relative">
      <SectionHeading
        badge="Download"
        title="Download Prombit Desktop"
        description="Always free. One click to install."
      />
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-glow bg-gradient-card p-8 shadow-glow">
          {/* Header row */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary">
              <Monitor className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-foreground">{release.title}</p>
              <p className="text-sm text-muted-foreground">Windows · {release.sizeMb}</p>
            </div>
            <Badge className="bg-gradient-primary text-primary-foreground border-0 text-[10px] uppercase tracking-wider">
              Latest
            </Badge>
          </div>

          {/* Meta row */}
          <div className="mb-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5 text-primary" />
              {release.version}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {release.date}
            </span>
          </div>

          {/* Changelog */}
          {release.changelog.length > 0 && (
            <div className="mb-7">
              <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <FileText className="h-3.5 w-3.5" /> What's new
              </p>
              <ul className="space-y-2">
                {release.changelog.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Download button */}
          <a href={release.downloadUrl} download>
            <Button variant="hero" size="lg" className="w-full text-base h-12">
              <Download className="mr-2 h-5 w-5" />
              Download {release.version} for Windows
            </Button>
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free to download and use · {release.sizeMb}
          </p>
        </div>
      </div>
    </div>
  </Section>
);

// ─── Error state ───────────────────────────────────────────────────────────────
const ErrorState = () => (
  <Section>
    <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center">
      <AlertCircle className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
      <p className="mb-1 font-semibold text-foreground">Couldn't load release info</p>
      <p className="mb-5 text-sm text-muted-foreground">
        There was a problem fetching the latest release from GitHub.
      </p>
      <a
        href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`}
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="hero-outline" size="sm">
          View releases on GitHub
        </Button>
      </a>
    </div>
  </Section>
);

// ─── Main component ────────────────────────────────────────────────────────────
const DownloadSection = () => {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!APP_IS_RELEASED) return;

    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error("Non-OK response");
        return res.json();
      })
      .then((data) => {
        const asset = (data.assets as { name: string; browser_download_url: string; size: number }[])
          .find((a) => a.name.endsWith(".exe"));

        setRelease({
          version: data.tag_name,
          title: data.name || `Prombit Desktop ${data.tag_name}`,
          date: formatDate(data.published_at),
          changelog: parseChangelog(data.body ?? ""),
          downloadUrl: asset?.browser_download_url ?? "",
          sizeMb: asset ? formatMb(asset.size) : "—",
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (!APP_IS_RELEASED) return <ComingSoon />;
  if (loading) return <LoadingSkeleton />;
  if (error || !release) return <ErrorState />;
  return <ReleaseCard release={release} />;
};

export default DownloadSection;
