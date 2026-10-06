import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
  hoverEffect?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses =
    'relative rounded-2xl border transition-all duration-250 ease-out';

  const variantClasses = {
    default:
      'bg-[#0D1017]/90 border-white/[0.08] shadow-md shadow-black/40 backdrop-blur-sm',
    elevated:
      'bg-[#121622] border-white/[0.12] shadow-xl shadow-black/60 backdrop-blur-md',
    interactive:
      'bg-[#0D1017]/90 border-white/[0.08] hover:border-cyan-500/35 hover:bg-[#111520] shadow-md shadow-black/40',
  };

  const hoverClasses = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/25 cursor-pointer'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
