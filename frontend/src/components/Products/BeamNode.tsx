import { forwardRef, type ReactNode } from "react";

const BeamNode = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={`z-10 flex items-center justify-center rounded-full border border-white/10 bg-[#0A1428] shadow-[0_0_20px_-8px_rgba(34,211,238,0.6)] ${className ?? ""}`}
  >
    {children}
  </div>
));
BeamNode.displayName = "BeamNode";

export default BeamNode;
