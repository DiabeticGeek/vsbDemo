"use client";

import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
};

export default function BeforeAfterImage({ beforeSrc, afterSrc, alt, className }: Props) {
  const [showBefore, setShowBefore] = useState(true);
  const current = showBefore ? beforeSrc : afterSrc;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      onClick={() => setShowBefore((v) => !v)}
      role="button"
      aria-label={`Wissel tussen voor en na: ${alt}`}
      title="Klik om te wisselen"
    >
      <div
        className="h-full w-full transition-all duration-500"
        style={{
          backgroundImage: `url('${current}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute top-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
        Klik om te wisselen
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
        {showBefore ? "VOOR" : "NA"}
      </div>
    </div>
  );
}
