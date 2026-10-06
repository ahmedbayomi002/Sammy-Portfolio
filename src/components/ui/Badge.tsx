import React from 'react';

/**
 * MetadataItem:
 * Renders informational labels as clean, unboxed text per the Zero-Pill design constitution.
 */
export interface MetadataItemProps {
  items: string[];
  separator?: string;
  className?: string;
}

export const MetadataList: React.FC<MetadataItemProps> = ({
  items,
  separator = '·',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-400 font-medium ${className}`}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          {idx < items.length - 1 && (
            <span className="text-zinc-600 select-none" aria-hidden="true">
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * InteractiveSegmentedButton:
 * Permitted for interactive filtering controls only.
 */
export interface SegmentedControlProps {
  options: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  activeId,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 bg-zinc-900/90 border border-white/[0.08] rounded-xl ${className}`}
      role="tablist"
    >
      {options.map((opt) => {
        const isActive = opt.id === activeId;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
