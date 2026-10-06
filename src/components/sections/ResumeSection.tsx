import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { usePortfolioContent } from '@/content/provider';

export const ResumeSection: React.FC = () => {
  const { profile, site, social } = usePortfolioContent();
  const [copied, setCopied] = useState(false);

  const cvHref = social.cv.downloadUrl || site.cvUrl || '#contact';

  const copyEmail = () => {
    navigator.clipboard.writeText(social.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="resume"
      aria-label="Professional Resume and Credentials"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Executive Credentials"
          title="Resume & Overview"
          subtitle="Documented competencies, operational framework, and digital transformation trajectory."
        />

        <div className="max-w-4xl mx-auto">
          <Card
            variant="elevated"
            className="p-6 sm:p-10 border-white/[0.1] bg-[#0D1017]/95 relative overflow-hidden shadow-2xl"
          >
            {/* Top Bar with Status Node */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  Executive Brief
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h3>
                <p className="text-sm font-semibold text-zinc-300">
                  {profile.role}
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300 w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Direct Candidate</span>
              </div>
            </div>

            {/* Core Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Core Professional Disciplines
                </p>
                <ul className="space-y-2 text-zinc-300">
                  {profile.focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium text-white">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Executive Positioning
                </p>
                <p className="text-zinc-300/90 leading-relaxed font-normal">
                  "{profile.personalIntro}"
                </p>
                <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.05] text-xs text-zinc-400">
                  <strong className="text-white">Business First. Technology Second.</strong> — Understanding operational root causes before choosing tools.
                </div>
              </div>
            </div>

            {/* Action Buttons: View CV & Download CV */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {social.cv.active && social.cv.downloadUrl ? (
                  <>
                    <Button
                      href={social.cv.downloadUrl}
                      external={true}
                      variant="primary"
                      size="md"
                      icon={<ExternalLink className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      View CV
                    </Button>
                    <Button
                      href={social.cv.downloadUrl}
                      variant="secondary"
                      size="md"
                      icon={<Download className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Download CV
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      href={`mailto:${social.email.address}?subject=Request%20CV%20-%20Ahmed%20Samy&body=Hi%20Ahmed%2C%0A%0APlease%20share%20your%20current%20curriculum%20vitae%20and%20credentials.`}
                      variant="primary"
                      size="md"
                      icon={<FileText className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Request Full CV
                    </Button>
                    <Button
                      href="#contact"
                      variant="secondary"
                      size="md"
                      icon={<Mail className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Direct Inquiries
                    </Button>
                  </>
                )}
              </div>

              {/* Direct email quick copy */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>{social.email.address}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-1 rounded-md bg-zinc-900 border border-white/[0.1] hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
