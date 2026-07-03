import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-transparent";

export default function InteractiveHoverButton({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}: InteractiveHoverButtonProps) {
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-8 group-hover:opacity-0">
        {children}
      </span>

      <span className="absolute inset-0 z-20 flex -translate-x-8 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {children}
        <ArrowRight className="w-4 h-4" />
      </span>

      <span className="absolute left-6 top-1/2 z-0 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 transition-all duration-500 ease-out group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:translate-y-0 group-hover:scale-100 group-hover:rounded-xl group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500" />
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`${base} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {content}
    </button>
  );
}
