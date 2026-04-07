interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
}

const MagneticButton = ({ href, children }: MagneticButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative inline-flex overflow-hidden rounded-full
      bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground
      transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
      hover:scale-[1.03] active:scale-[0.98]
      group md:text-base md:py-3.5
    "
  >
    {/* Sliding highlight */}
    <span
      className="
        absolute inset-0 rounded-full
        bg-white/15
        translate-x-[-101%] group-hover:translate-x-0
        transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
      "
    />
    {/* Content */}
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  </a>
);

export default MagneticButton;
