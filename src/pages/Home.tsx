/**
 * src/pages/Home.tsx
 *
 * 页面文件：渲染单页简历的整体布局，并确保所有可导航板块都具有锚点 id 与滚动偏移，
 * 以便 href="#about" 等内联锚点能正确跳转且不被固定导航遮挡。
 */

import React, { useEffect } from 'react'
import { NavigationBar } from '../sections/lisa/NavigationBar'
import { HeroSection } from '../sections/lisa/HeroSection'
import { AboutSection } from '../sections/lisa/AboutSection'
import { StrengthsSection } from '../sections/lisa/StrengthsSection'
import { ExperienceSection } from '../sections/lisa/ExperienceSection'
import { AchievementsSection } from '../sections/lisa/AchievementsSection'
import { VolunteeringSection } from '../sections/lisa/VolunteeringSection'
import { EducationSection } from '../sections/lisa/EducationSection'
import { ContactSection } from '../sections/lisa/ContactSection'

/**
 * SectionWrapper
 *
 * 小型复用容器，用来给每个页面板块添加 id（用于锚点）并处理滚动偏移（避免被 sticky 导航遮挡）。
 *
 * @param props.id - 锚点 id（例如 "about"）
 * @param props.className - 额外的 className
 * @param props.children - 板块内容
 */
const SectionWrapper: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({
  id,
  className = '',
  children,
}) => {
  return (
    // scroll-mt-20 是 Tailwind 的辅助类（相当于给目标元素设置 scroll-margin-top）
    // 同时我们也设置内联 style 以确保在任何情况下都有合适的偏移（72px 适用于当前导航高度）。
    <section id={id} className={`scroll-mt-20 ${className}`} style={{ scrollMarginTop: 72 }}>
      {children}
    </section>
  )
}

/**
 * HomePage
 *
 * 渲染首页并用 SectionWrapper 为每个板块提供锚点支持。
 */
export default function HomePage(): JSX.Element {
  /**
   * 在页面加载时设置浏览器 tab 标题。
   */
  useEffect(() => {
    document.title = 'Lisa Wang - Financial Analyst'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <NavigationBar />

      <main>
        {/* 顶部锚点，导航中的 Logo 链接使用 href="#top" 指向此处 */}
        <SectionWrapper id="top" className="pt-6">
          <HeroSection />
        </SectionWrapper>

        <div className="bg-gray-50 text-slate-900">
          <SectionWrapper id="about" className="pt-8">
            <AboutSection />
          </SectionWrapper>

          <SectionWrapper id="strengths" className="pt-8">
            <StrengthsSection />
          </SectionWrapper>

          {/* Experience 虽然在导航中被刻意移除，但若仍想保留锚点，可保留此 id */}
          <SectionWrapper id="experience" className="pt-8">
            <ExperienceSection />
          </SectionWrapper>

          <SectionWrapper id="achievements" className="pt-8">
            <AchievementsSection />
          </SectionWrapper>

          <SectionWrapper id="volunteering" className="pt-8">
            <VolunteeringSection />
          </SectionWrapper>

          <SectionWrapper id="education" className="pt-8">
            <EducationSection />
          </SectionWrapper>

          <SectionWrapper id="contact" className="pt-8">
            <ContactSection />
          </SectionWrapper>
        </div>
      </main>
    </div>
  )
}