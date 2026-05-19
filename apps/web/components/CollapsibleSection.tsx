"use client";

import { useState, ReactNode } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false,
  className = "" 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-2xl bg-surface shadow-sm ring-1 ring-outline/20 sm:ring-0 sm:shadow-none sm:bg-transparent ${className}`}>
      {/* Mobile Header (Collapsible) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 sm:hidden"
      >
        <h2 className="font-headline text-lg font-bold text-on-surface">
          {title}
        </h2>
        <span className="material-symbols-outlined text-outline transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          keyboard_arrow_down
        </span>
      </button>

      {/* Desktop Header (Static) */}
      <h2 className="hidden mb-6 sm:flex items-center font-headline text-xl font-bold text-on-surface p-0">
        {title}
      </h2>

      {/* Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} px-6 pb-6 sm:block sm:p-0`}>
        {children}
      </div>
    </div>
  );
}
