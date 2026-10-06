import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';

export const About: React.FC = () => {
  const { profile } = usePortfolioContent();

  return (
    <section
      id="about"
      aria-label="About Ahmed Samy"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background & Philosophy"
          title="About Me"
          subtitle="Operating at the intersection of business strategy, customer experience, and intelligent automation."
          align="left"
        />

        {/* Split Grid: LEFT narrative text, RIGHT 4 capability/value cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Main About text with emphasized core concepts */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-base sm:text-lg text-zinc-300/90 leading-relaxed font-normal">
            <p>
              I’m a{' '}
              <strong className="text-white font-semibold">Customer Experience</strong>{' '}
              and{' '}
              <strong className="text-white font-semibold">Digital Transformation</strong>{' '}
              professional with hands-on experience across{' '}
              <span className="text-cyan-300 font-medium">FinTech</span>, customer service,{' '}
              <strong className="text-white font-semibold">CRM</strong>, business processes,{' '}
              <strong className="text-white font-semibold">AI</strong>,{' '}
              <strong className="text-white font-semibold">automation</strong>, and digital solutions.
            </p>

            <p>
              My approach combines business understanding with technology — starting from the real business challenge, analyzing the process, designing the right solution, connecting systems, and using{' '}
              <span className="text-cyan-300 font-medium">AI and automation</span>{' '}
              to create more efficient and scalable operations.
            </p>

            <p>
              I’m particularly interested in building practical solutions that improve customer journeys, operational efficiency, decision-making, and digital experiences.
            </p>

            <div className="pt-3.5 border-t border-white/[0.08] flex items-center gap-3 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Grounded in practical operations, not theoretical buzzwords.</span>
            </div>
          </div>

          {/* RIGHT: Four capability/value cards in a clean 2x2 grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {profile.philosophyCards.map((card) => (
              <Card
                key={card.number}
                variant="interactive"
                hoverEffect={true}
                className="p-4.5 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    {card.number}
                  </span>
                  <h3 className="mt-2 text-base sm:text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                    "{card.description}"
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span>Core Pillar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
