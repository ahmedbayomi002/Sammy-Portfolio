import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0F] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shrink-0';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-lg gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-zinc-900/90 hover:bg-zinc-850 text-zinc-100 border border-white/[0.12] hover:border-white/[0.24] hover:-translate-y-0.5 active:translate-y-0 shadow-sm',
    outline:
      'bg-transparent hover:bg-white/[0.05] text-zinc-200 border border-white/[0.14] hover:border-cyan-400/50 hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'bg-transparent hover:bg-white/[0.06] text-zinc-300 hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
