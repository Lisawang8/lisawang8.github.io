/**
 * src/pages/Home.tsx
 *
 * Home page: composes the main sections into a non-empty, responsive page.
 * Purpose: Ensure the Home page renders meaningful content (no blank page), using existing section components.
 */

import React from 'react'
import { NavigationBar } from '../sections/lisa/NavigationBar'
import { HeroSection } from '../sections/lisa/HeroSection'
import { StrengthsSection } from '../sections/lisa/StrengthsSection'
import { ExperienceSection } from '../sections/lisa/ExperienceSection'
import { AchievementsSection } from '../sections/lisa/AchievementsSection'
import { EducationSection } from '../sections/lisa/EducationSection'
import { VolunteeringSection } from '../sections/lisa/VolunteeringSection'
import { ContactSection } from '../sections/lisa/ContactSection'
import { AboutSection } from '../sections/lisa/AboutSection'

/**
 * HomePage
 *
 * Renders the full one-page layout by composing smaller section components.
 * This component is intentionally simple and only responsible for layout composition.
 *
 * @returns Home page element
 */
export default function Home(): JSX.Element {
  return (
    <div id="home" className="min-h-screen bg-white text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4">
          <NavigationBar />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero / Intro */}
        <HeroSection />

        {/* Core sections */}
        <section className="mt-6">
          <AboutSection />
        </section>

        <section className="mt-8">
          <StrengthsSection />
        </section>

        <section className="mt-8">
          <ExperienceSection />
        </section>

        <section className="mt-8">
          <AchievementsSection />
        </section>

        <section className="mt-8">
          <EducationSection />
        </section>

        <section className="mt-8">
          <VolunteeringSection />
        </section>

        {/* Contact */}
        <section className="mt-12 pb-20">
          <ContactSection />
        </section>
      </main>

      <footer className="border-t bg-white/50 py-6">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Lisa Wang — Independent Investor & Financial Analyst
        </div>
      </footer>
    </div>
  )
}
