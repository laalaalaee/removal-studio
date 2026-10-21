import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { REPO_URL } from '../config/links';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="w-full bg-paper border-t border-rule mt-16 py-8 px-4 sm:px-8 transition-colors text-left">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
          <span className="font-semibold text-ink text-sm">Removal Studio</span>
          <span>·</span>
          <span className="font-mono text-[11px]">Free, open-source, in-browser background remover</span>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <button onClick={onOpenPrivacy} className="hover:text-ink transition-colors cursor-pointer flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Privacy</span>
            </button>
          </li>
          <li>
            <button onClick={onOpenTerms} className="hover:text-ink transition-colors cursor-pointer">
              Terms
            </button>
          </li>
          <li>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
              GitHub (MIT)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
