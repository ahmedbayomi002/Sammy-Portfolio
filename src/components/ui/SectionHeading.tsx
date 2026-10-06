import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  id,
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-6 sm:mb-8 ${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-1.5 select-none">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-zinc-300/90 font-normal leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
