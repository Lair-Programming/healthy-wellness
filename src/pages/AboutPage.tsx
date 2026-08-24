import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { getIcon } from '@/components/iconMap';
import { values } from '@/data/content';

const differentiators = [
  {
    title: 'Healthy Meals',
    description: 'Chef-prepared, nutritionally balanced meals delivered to your door.',
    image: 'https://images.pexels.com/photos/7660437/pexels-photo-7660437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Easy Recipes',
    description: 'Hundreds of simple recipes that make cooking at home a breeze.',
    image: 'https://images.pexels.com/photos/5759141/pexels-photo-5759141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Wellness Services',
    description: 'Expert nutrition coaching and personalized meal planning support.',
    image: 'https://images.pexels.com/photos/15319047/pexels-photo-15319047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Healthy Products',
    description: 'Curated snacks and pantry essentials for your healthy lifestyle.',
    image: 'https://images.pexels.com/photos/9874981/pexels-photo-9874981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Making Healthy Living Simple for Everyone"
        description="WellnessHub is a healthy food and wellness platform that makes healthy living easier and more convenient for busy people."
        breadcrumb="About"
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/4920537/pexels-photo-4920537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="People cooking healthy meals together"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-white shadow-card p-5 max-w-[220px]">
                <div className="font-display text-3xl font-bold text-brand-green">2019</div>
                <div className="text-sm text-ink-secondary">The year WellnessHub was founded</div>
              </div>
            </div>
            <div>
              <span className="section-label mb-4">Our Story</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-5">
                From a Simple Idea to a Wellness Movement
              </h2>
              <div className="space-y-4 text-base text-ink-secondary leading-relaxed">
                <p>
                  WellnessHub started in 2019 with a simple observation: eating healthy shouldn't be
                  complicated, expensive, or time-consuming. Our founders, a team of nutritionists
                  and food lovers, noticed that busy students and professionals struggled to find
                  nutritious meals that were also convenient and delicious.
                </p>
                <p>
                  What began as a small meal-prep service has grown into a complete wellness platform
                  offering fresh meals, simple recipes, expert nutrition coaching, and healthy
                  products. Today, we serve over 15,000 happy customers who trust us to support
                  their healthy lifestyle every single day.
                </p>
                <p>
                  We believe that small, consistent choices lead to big changes. That's why every
                  meal we prepare, every recipe we share, and every service we offer is designed to
                  make healthy living just a little bit easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="card p-8 lg:p-10 bg-white">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green mb-5">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-dark mb-3">Our Mission</h3>
              <p className="text-lg text-ink-secondary leading-relaxed italic">
                "To make healthy food and healthy habits simple and accessible."
              </p>
            </div>
            <div className="card p-8 lg:p-10 bg-white">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-orange-50 text-accent-orange mb-5">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-dark mb-3">Our Vision</h3>
              <p className="text-lg text-ink-secondary leading-relaxed italic">
                "A healthier community through better everyday choices."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-4">What Drives Us</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-3">
              Our Values
            </h2>
            <p className="text-base text-ink-secondary">
              The principles that guide everything we do at WellnessHub.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value) => {
              const Icon = getIcon(value.icon);
              return (
                <div
                  key={value.title}
                  className="card p-6 text-center"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green mb-3">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-dark mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-4">What Sets Us Apart</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-3">
              Why WellnessHub is Different
            </h2>
            <p className="text-base text-ink-secondary">
              We're the only platform that combines everything you need for healthy living in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="card group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Combination highlight */}
          <div className="mt-12 rounded-2xl bg-white shadow-card p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-display text-xl font-bold text-ink-dark mb-2">
                  One Platform, Complete Wellness
                </h3>
                <p className="text-sm text-ink-secondary">
                  WellnessHub uniquely combines healthy meals, recipes, wellness services, and
                  healthy products — so you have everything you need in one convenient place.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Healthy Meals', 'Recipes', 'Wellness Services', 'Healthy Products'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-50 px-4 py-2 text-sm font-medium text-brand-green"
                  >
                    <CheckCircle2 className="h-4 w-4" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Community?"
        description="Become part of a growing community of people choosing healthier lives every day."
        buttonText="Get Started"
        buttonLink="/services"
      />
    </>
  );
}
