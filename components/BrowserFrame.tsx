import Image from "next/image";

interface BrowserWindowProps {
  url: string;
  screenshot: string;
  title: string;
  sizes?: string;
}

export function BrowserWindow({
  url,
  screenshot,
  title,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: BrowserWindowProps) {
  return (
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
          sizes={sizes}
        />
      </div>
    </div>
  );
}

export function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {stack.map((item) => (
        <li
          key={item}
          className="px-2.5 py-0.5 text-xs rounded-full border border-white/10 text-[#a0a0a0]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

interface BrowserFrameProps {
  url: string;
  screenshot: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
}

export default function BrowserFrame({
  url,
  screenshot,
  title,
  description,
  role,
  stack,
}: BrowserFrameProps) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <BrowserWindow url={url} screenshot={screenshot} title={title} />
      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold group-hover:text-[#d4a853] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#d4a853]/80 mt-0.5">{role}</p>
        <p className="text-sm text-[#a0a0a0] mt-2">{description}</p>
        <div className="mt-3">
          <StackList stack={stack} />
        </div>
      </div>
    </a>
  );
}
