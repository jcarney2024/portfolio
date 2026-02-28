import Image from "next/image";

interface BrowserFrameProps {
  url: string;
  screenshot: string;
  title: string;
  description: string;
}

export default function BrowserFrame({
  url,
  screenshot,
  title,
  description,
}: BrowserFrameProps) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 group-hover:border-[#d4a853]/40 group-hover:shadow-lg group-hover:shadow-[#d4a853]/5">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-xs text-[#a0a0a0] truncate">
            {url}
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={screenshot}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold group-hover:text-[#d4a853] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#a0a0a0] mt-1">{description}</p>
      </div>
    </a>
  );
}
