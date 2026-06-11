'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/lib/animations';
import { skills } from '@/lib/data';
import type { SkillCategory } from '@/types';

const categoryLabels: Record<SkillCategory, string> = {
  'Data': 'Data & Analytics',
  'AI & ML': 'AI & Machine Learning',
  'Web Development': 'Web Development',
  'Tools': 'Tools & Technologies',
};

const categoryOrder: SkillCategory[] = ['Data', 'AI & ML', 'Web Development', 'Tools'];

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<SkillCategory, string[]>);

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">Skills & Technologies</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            The tools and technologies I work with to bring ideas to life.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {categoryOrder.map((category, idx) => (
            <FadeIn key={category} delay={0.2 + idx * 0.1}>
              <div className="card">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills[category]?.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-text-secondary bg-background-secondary rounded-full hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
