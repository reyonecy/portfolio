'use client';

import { useState } from 'react';
import { Send, Mail, Github, Linkedin, Instagram, Twitter, MapPin, Phone } from 'lucide-react';
import { FadeIn } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">Get In Touch</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-text-secondary">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-text-primary hover:text-accent transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-text-primary hover:text-accent transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="text-text-primary">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personalInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-accent">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
