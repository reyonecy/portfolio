'use client';

import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/lib/animations';
import { experiences, education } from '@/lib/data';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  type: 'education' | 'work' | 'certification';
  date: string;
  description?: string;
}

const journeyItems: TimelineItem[] = [
  ...education.map((edu, idx) => ({
    id: `edu-${idx}`,
    title: edu.degree,
    organization: edu.institution,
    type: 'education' as const,
    date: edu.duration,
  })),
  ...experiences.map((exp) => ({
    id: exp.id,
    title: exp.title,
    organization: exp.organization,
    type: 'work' as const,
    date: exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - Present`,
    description: exp.description,
  })),
];

function getIcon(type: string) {
  switch (type) {
    case 'education':
      return <GraduationCap size={18} className="text-accent" />;
    case 'work':
      return <Briefcase size={18} className="text-accent" />;
    case 'certification':
      return <Award size={18} className="text-accent" />;
    default:
      return null;
  }
}

export default function Journey() {
  return (
    <section id="journey" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">My Journey</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            The path that shaped who I am today - education, experiences, and milestones.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

            <FadeInStagger className="space-y-8">
              {journeyItems.map((item, idx) => (
                <FadeInItem key={item.id}>
                  <div
                    className={`relative flex items-start gap-6 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-background border-2 border-accent rounded-full flex items-center justify-center z-10">
                      {getIcon(item.type)}
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <div className="card">
                        <span className="text-xs text-accent font-medium">
                          {item.date}
                        </span>
                        <h3 className="font-heading text-lg font-semibold mt-1">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-sm mt-1">
                          {item.organization}
                        </p>
                        {item.description && (
                          <p className="text-text-secondary text-sm mt-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
