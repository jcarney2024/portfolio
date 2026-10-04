import { GITHUB_URL, LINKEDIN_URL, GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <p className="text-[#a0a0a0]">Let&apos;s connect</p>
        <a
          href="mailto:j.carney@yale.edu"
          className="text-[#d4a853] hover:text-[#e0b960] transition-colors"
        >
          j.carney@yale.edu
        </a>
        <div className="flex gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#d4a853] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#d4a853] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
        <p className="text-sm text-[#a0a0a0]/50">
          &copy; {new Date().getFullYear()} Jack Carney
        </p>
      </div>
    </footer>
  );
}
