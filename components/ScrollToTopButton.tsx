"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn-secondary fixed bottom-5 right-4 z-40 !px-3.5 !py-3 shadow-glow sm:bottom-8 sm:right-8"
      aria-label="Move to top"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="text-xs sm:text-sm">Top</span>
    </button>
  );
}
