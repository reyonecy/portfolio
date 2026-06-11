'use client';

import Image from 'next/image';
import { ArrowDown, FolderOpen, Mail } from 'lucide-react';
import { FadeIn } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <p className="text-accent font-medium mb-4">Hello, I'm</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="heading-xl mb-4">{personalInfo.name}</h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary mb-6">
                {personalInfo.headline}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-body mb-8 max-w-lg">
                I'm passionate about exploring data, building intelligent systems,
                and leveraging machine learning to solve real-world problems.
                Currently focused on data analytics, deep learning, and AI applications.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary gap-2">
                  <FolderOpen size={18} />
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary gap-2">
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn delay={0.2}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-accent/10 rounded-full" />
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.6}>
          <div className="flex justify-center mt-16">
            <a
              href="#about"
              className="p-3 text-text-secondary dark:text-text-dark-secondary hover:text-accent transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
