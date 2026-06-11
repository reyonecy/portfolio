import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-semibold text-accent mb-2">
              {personalInfo.name}
            </p>
            <p className="text-text-secondary text-sm">
              Copyright {currentYear}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
