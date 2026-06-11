'use client';

import { FadeIn } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-8 text-center">About Me</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-text-secondary dark:text-text-dark-secondary space-y-6">
              <p>
                I'm a curious technologist with a passion for uncovering insights
                hidden within data. My journey into the world of technology began
                with a simple question: how can we use data to make better decisions?
              </p>

              <p>
                Today, I focus on bridging the gap between raw data and actionable
                intelligence. Whether it's building machine learning models, creating
                interactive visualizations, or training deep learning networks,
                I find joy in every layer of the process.
              </p>

              <p>
                What drives me is the belief that AI and data science should serve people.
                I'm constantly learning, experimenting, and pushing myself to understand
                new concepts. From computer vision applications to predictive analytics,
                I approach each project as an opportunity to create something meaningful.
              </p>

              <p>
                Beyond the screen, you'll find me exploring new ML frameworks,
                contributing to open source AI projects, and sharing knowledge
                with the community. I believe in continuous growth and the power
                of collaboration.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
