'use client';

import { ExternalLink, Award } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/lib/animations';
import { certifications } from '@/lib/data';
import { useState } from 'react';

const categories = ['All', 'AI & ML', 'Data', 'Cloud'];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertifications =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="section-padding bg-background-secondary">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">Certifications</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-8">
            Professional certifications that validate my expertise and commitment to learning.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-background text-text-secondary hover:bg-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => (
            <FadeInItem key={cert.id}>
              <article className="card group hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-accent" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-text-secondary text-sm">{cert.issuer}</p>
                    <p className="text-text-secondary text-xs mt-1">{cert.date}</p>
                    {cert.verificationLink && (
                      <a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-2"
                      >
                        Verify
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
