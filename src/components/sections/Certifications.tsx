import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';
import { Award, BookOpen, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = usePortfolioContent();

  return (
    <section
      id="certifications"
      aria-label="Certifications and Professional Learning"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Continuous Education"
          title={certifications.sectionTitle}
          subtitle={certifications.sectionSubtitle}
        />

        <div className="max-w-3xl mx-auto">
          <Card
            variant="default"
            className="p-6 sm:p-8 text-center border-white/[0.08] bg-[#0D1017]/90 relative overflow-hidden"
          >
            <div className="w-11 h-11 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
              Ongoing Professional Development
            </h3>

            <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-xl mx-auto font-normal mb-5">
              {certifications.message}
            </p>

            {/* If certifications array has items in the future, render them */}
            {certifications.certifications && certifications.certifications.length > 0 && (
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {certifications.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-xl bg-zinc-900 border border-white/[0.06] flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{cert.name}</p>
                      {cert.issuer && (
                        <p className="text-xs text-zinc-400">{cert.issuer}</p>
                      )}
                    </div>
                    {cert.year && (
                      <span className="text-xs font-mono text-cyan-400">{cert.year}</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Structured for formal credential additions as programs conclude</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
