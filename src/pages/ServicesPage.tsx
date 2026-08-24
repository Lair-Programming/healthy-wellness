import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { getIcon } from '@/components/iconMap';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Services That Support Your Healthy Lifestyle"
        description="From meal delivery to nutrition coaching, we offer everything you need to eat well and live healthier — all tailored to your busy schedule."
        breadcrumb="Services"
      />

      {/* Services list */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <div className="space-y-8 lg:space-y-12">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              const reversed = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    reversed ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute -top-4 -left-3 lg:-left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white shadow-glow">
                      <Icon className="h-8 w-8" />
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-orange mb-2">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-dark mb-3">
                      {service.title}
                    </h2>
                    <p className="text-base text-ink-secondary mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-ink-dark mb-3 uppercase tracking-wide">
                        Key Benefits
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-ink-secondary"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green-50 text-brand-green shrink-0">
                              <Check className="h-3 w-3" />
                            </span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="btn-secondary">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Choose the Service That Fits Your Lifestyle"
        description="Whether you need meals delivered, a meal plan, or expert nutrition advice — we have a service designed for you."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </>
  );
}
