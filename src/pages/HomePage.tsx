import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, BookOpen } from 'lucide-react';
import FeaturedCategories from '@/components/FeaturedCategories';
import MealCard from '@/components/MealCard';
import RecipeCard from '@/components/RecipeCard';
import CTASection from '@/components/CTASection';
import { getIcon } from '@/components/iconMap';
import { meals, recipes, stats, whyChooseUs } from '@/data/content';

export default function HomePage() {
  const popularRecipes = recipes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 lg:pt-24 overflow-hidden">
        <div className="container-page pt-8 lg:pt-12 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <span className="section-label mb-5">
                <UtensilsCrossed className="h-3.5 w-3.5" /> Healthy Food & Wellness
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-dark mb-5 leading-[1.1]">
                Eat Better. <span className="text-gradient">Live Better.</span>
              </h1>
              <p className="text-base lg:text-lg text-ink-secondary mb-8 max-w-xl leading-relaxed">
                WellnessHub makes healthy living simple. Enjoy chef-prepared nutritious meals,
                easy recipes, and expert wellness guidance — all designed for your busy lifestyle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary">
                  <UtensilsCrossed className="h-4 w-4" /> Explore Healthy Meals
                </Link>
                <Link to="/recipes" className="btn-secondary">
                  <BookOpen className="h-4 w-4" /> Explore Recipes
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                {stats.slice(0, 3).map((stat) => {
                  const Icon = getIcon(stat.icon);
                  return (
                    <div key={stat.label} className="text-center sm:text-left">
                      <Icon className="h-5 w-5 text-brand-green mb-1.5 mx-auto sm:mx-0" />
                      <div className="font-display text-2xl font-bold text-ink-dark">{stat.value}</div>
                      <div className="text-xs text-ink-secondary">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hero image */}
            <div className="order-1 lg:order-2 relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Fresh healthy food bowls with vegetables"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 lg:-left-8 rounded-2xl bg-white shadow-card p-4 flex items-center gap-3 max-w-[200px]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange-50 text-accent-orange shrink-0">
                  <UtensilsCrossed className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink-dark">Fresh Daily</div>
                  <div className="text-xs text-ink-secondary">Chef-prepared meals</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-2 lg:-right-6 rounded-2xl bg-brand-green shadow-glow p-4 text-white max-w-[170px]">
                <div className="font-display text-2xl font-bold">100%</div>
                <div className="text-xs text-white/90">Natural Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <FeaturedCategories />

      {/* Popular meals */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <span className="section-label mb-4">Popular Picks</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-2">
                Popular Healthy Meals
              </h2>
              <p className="text-base text-ink-secondary">
                Our most-loved meals, freshly prepared and ready to fuel your day.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:gap-2.5 transition-all shrink-0"
            >
              View All Meals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular recipes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <span className="section-label mb-4">Cook at Home</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-2">
                Popular Recipes
              </h2>
              <p className="text-base text-ink-secondary">
                Simple, healthy recipes you can make in your own kitchen.
              </p>
            </div>
            <Link
              to="/recipes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:gap-2.5 transition-all shrink-0"
            >
              View All Recipes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-4">Why Us</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-3">
              Why Choose WellnessHub?
            </h2>
            <p className="text-base text-ink-secondary">
              We make healthy eating convenient, affordable, and genuinely enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.title}
                  className="card p-6 text-center"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green mb-4">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-green-50 to-accent-orange-50 p-8 lg:p-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = getIcon(stat.icon);
                return (
                  <div key={stat.label} className="text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-green shadow-soft mb-3">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-ink-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
