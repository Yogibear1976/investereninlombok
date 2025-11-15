"use client";

import { useState } from "react";

interface CopyLinkButtonProps {
  link: string;
}

export default function CopyLinkButton({ link }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className='px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition'
    >
      {copied ? "Link gekopieerd!" : "Kopieer link"}
    </button>
  );
}
