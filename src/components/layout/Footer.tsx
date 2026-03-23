import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Work Samples", path: "/#work-samples" },
  { label: "Career Timeline", path: "/career-timeline" },
];

const tools = [
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico", url: "https://lovable.dev" },
  { name: "Claude", logo: "https://www.anthropic.com/favicon.ico", url: "https://claude.ai" },
  { name: "VS Code", logo: "https://code.visualstudio.com/favicon.ico", url: "https://code.visualstudio.com" },
  { name: "Figma", logo: "https://static.figma.com/app/icon/1/favicon.png", url: "https://figma.com" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        {/* Nav column */}
        <nav className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) =>
            link.path.startsWith("/#") ? (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.path.replace("/#", "");
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.replaceState(null, "", link.path);
                  } else {
                    window.location.href = link.path;
                  }
                }}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Made with */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs text-muted-foreground">Made with</p>
          <div className="flex items-center gap-3">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                title={tool.name}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-4 w-4 rounded-sm opacity-60 transition-opacity group-hover:opacity-100"
                />
                <span>{tool.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          aria-label="LinkedIn Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground/60">
        © {new Date().getFullYear()} MJ Portfolio
      </p>
    </div>
  </footer>
);

export default Footer;
