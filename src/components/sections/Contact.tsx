import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Copy, Check, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { usePortfolioContent } from '@/content/provider';

export const Contact: React.FC = () => {
  const { social } = usePortfolioContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(social.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${social.email.address}?subject=Business%20Challenge%20Inquiry%20-%20Ahmed%20Samy&body=Hi%20Ahmed%2C%0A%0AI%20would%20like%20to%20discuss%20a%20business%20challenge%20related%20to%20AI%2C%20Automation%2C%20CX%2C%20or%20CRM...`;

  return (
    <section
      id="contact"
      aria-label="Contact and Consultation Inquiry"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Initiate Collaboration"
          title="Have a business challenge?"
          align="center"
        />

        <Card
          variant="elevated"
          className="p-6 sm:p-10 text-center border-white/[0.1] max-w-3xl mx-auto bg-[#0D1017]/95 shadow-2xl"
        >
          {/* Main Statement */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 [text-wrap:balance]">
            "Let’s turn it into a practical digital solution."
          </h3>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-xl mx-auto mb-6 font-normal">
            Whether the challenge is related to AI, automation, customer experience, CRM, or digital transformation, let’s explore the right approach.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              href={mailtoUrl}
              variant="primary"
              size="lg"
              icon={<Mail className="w-4 h-4" />}
              iconPosition="left"
            >
              Email Me
            </Button>

            {social.linkedIn.active && social.linkedIn.url && (
              <Button
                href={social.linkedIn.url}
                external={true}
                variant="secondary"
                size="lg"
                icon={<Linkedin className="w-4 h-4" />}
                iconPosition="left"
              >
                LinkedIn
              </Button>
            )}

            {social.whatsApp.active && social.whatsApp.url && (
              <Button
                href={social.whatsApp.url}
                external={true}
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
                iconPosition="left"
              >
                WhatsApp
              </Button>
            )}
          </div>

          {/* Direct Address & Quick Copy Details */}
          <div className="mt-6 pt-4.5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-zinc-400">
            <span>Direct Email:</span>
            <div className="flex items-center gap-2 bg-zinc-900 px-3.5 py-2 rounded-xl border border-white/[0.1] shadow-sm">
              <span className="font-mono text-zinc-200">{social.email.address}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
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
            {copied && <span className="text-emerald-400 text-xs font-semibold">Copied to clipboard!</span>}
          </div>
        </Card>
      </div>
    </section>
  );
};
