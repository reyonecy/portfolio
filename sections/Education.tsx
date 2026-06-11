'use client';

import { GraduationCap, BookOpen } from 'lucide-react';
import { FadeIn } from '@/lib/animations';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">Education</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            My academic background and relevant coursework.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.1}>
              <article className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-text-primary dark:text-text-dark-primary">
                      {edu.degree}
                    </h3>
                    <p className="text-text-secondary dark:text-text-dark-secondary mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-accent text-sm mt-1">{edu.duration}</p>
                    {edu.coursework && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 text-text-secondary dark:text-text-dark-secondary text-sm mb-2">
                          <BookOpen size={16} />
                          Relevant Coursework
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-xs text-text-secondary dark:text-text-dark-secondary bg-background-secondary dark:bg-background-dark-secondary px-2 py-1 rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
