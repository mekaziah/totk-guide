import { Youtube } from "lucide-react";

interface VideoLinkProps {
  name: string;
  extraTerms?: string;
}

export function VideoLink({ name, extraTerms = "location guide" }: VideoLinkProps) {
  const query = encodeURIComponent(`tears of the kingdom ${name} ${extraTerms}`);
  const url = `https://www.youtube.com/results?search_query=${query}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-red-600/15 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition-colors text-xs font-medium whitespace-nowrap"
      title={`Watch "${name}" guide on YouTube`}
    >
      <Youtube className="h-3.5 w-3.5 shrink-0" />
      Watch
    </a>
  );
}
