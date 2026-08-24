import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = 'Start Your Healthy Journey Today',
  description = 'Join thousands of people who have made healthy eating simple with WellnessHub. Fresh meals, easy recipes, and expert guidance — all in one place.',
  buttonText = 'Get Started',
  buttonLink = '/services',
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-green-dark px-6 py-14 lg:px-16 lg:py-20 text-center">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-72 w-72 rounded-full bg-white/5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-8 leading-relaxed">
              {description}
            </p>
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-green shadow-lg transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:-translate-y-0.5"
            >
              {buttonText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
