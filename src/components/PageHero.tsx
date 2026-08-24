import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  breadcrumb: string;
}

export default function PageHero({ label, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-brand-green-50 to-white pt-28 lg:pt-36 pb-14 lg:pb-20">
      <div className="container-page">
        <nav className="flex items-center gap-1.5 text-xs text-ink-secondary mb-5" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-green font-medium">{breadcrumb}</span>
        </nav>
        <span className="section-label mb-4">{label}</span>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-ink-dark mb-4 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-base lg:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
