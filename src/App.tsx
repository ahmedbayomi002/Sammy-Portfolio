/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ContentProviderComponent } from '@/content/provider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProfileSection } from './components/sections/ProfileSection';
import { AiInAction } from './components/sections/AiInAction';
import { Capabilities } from './components/sections/Capabilities';
import { Approach } from './components/sections/Approach';
import { HowIUseAi } from './components/sections/HowIUseAi';
import { SelectedWork } from './components/sections/SelectedWork';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { TechStack } from './components/sections/TechStack';
import { Certifications } from './components/sections/Certifications';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <ContentProviderComponent>
      <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Landmarks following exact Page Flow */}
        <main id="main-content" className="flex-1">
          {/* 01. Hero */}
          <Hero />

          {/* 02. Professional Profile + Photo */}
          <ProfileSection />

          {/* 03. AI in Action */}
          <AiInAction />

          {/* 04. What I Work On */}
          <Capabilities />

          {/* 05. How I Approach Problems */}
          <Approach />

          {/* 06. How I Use AI */}
          <HowIUseAi />

          {/* 07. Selected Work */}
          <SelectedWork />

          {/* 08. Professional Journey */}
          <Experience />

          {/* 09. My AI & Digital Skillset */}
          <Skills />

          {/* 10. Tools & Technologies */}
          <TechStack />

          {/* 11. Certifications & Learning */}
          <Certifications />

          {/* 12. Resume */}
          <ResumeSection />

          {/* 13. Contact */}
          <Contact />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </ContentProviderComponent>
  );
}
