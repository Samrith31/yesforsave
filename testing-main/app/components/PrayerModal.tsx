"use client";

import { useEffect } from "react";

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfA1XoR1Yx0s-form-url-example/viewform?usp=sharing";

export default function PrayerModal({ isOpen, onClose }: PrayerModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden relative animate-fade-in-up">
        <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-[#e91347] to-[var(--color-blue-900)]">
          <h2 className="text-xl font-semibold text-white">Send a Prayer Request</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-600 font-bold text-2xl"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        <div className="p-4 max-h-[80vh] overflow-y-auto">
          <iframe
            src={`${formUrl}?embedded=true`}
            width="100%"
            height="600"
            className="rounded-md border w-full"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
