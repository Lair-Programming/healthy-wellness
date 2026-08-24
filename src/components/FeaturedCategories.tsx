import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '@/components/iconMap';
import { featuredCategories } from '@/data/content';

export default function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label mb-4">What We Offer</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-3">
            Healthy Choices for Every Day
          </h2>
          <p className="text-base text-ink-secondary">
            Everything you need to eat well and live better — from fresh meals to simple recipes and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((cat) => {
            const Icon = getIcon(cat.icon);
            return (
              <Link
                key={cat.title}
                to={cat.link}
                className="card group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur text-brand-green shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink-dark mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-ink-secondary mb-4 flex-1">{cat.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
