import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  ChefHat,
  Flame,
  ArrowLeft,
  Bookmark,
  Check,
  ListOrdered,
  Apple,
} from 'lucide-react';
import { recipes } from '@/data/content';

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);
  const [saved, setSaved] = useState(false);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  const nutritionItems = [
    { label: 'Protein', value: recipe.nutrition.protein },
    { label: 'Carbs', value: recipe.nutrition.carbs },
    { label: 'Fat', value: recipe.nutrition.fat },
    { label: 'Fiber', value: recipe.nutrition.fiber },
  ];

  return (
    <>
      {/* Hero image */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/80 via-ink-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container-page pb-8 lg:pb-12">
              <Link
                to="/recipes"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Recipes
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                  {recipe.category}
                </span>
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-orange/80 backdrop-blur px-3 py-1 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-white max-w-3xl">
                {recipe.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-page py-6">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green shrink-0">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-ink-secondary">Cook Time</div>
                <div className="text-sm font-semibold text-ink-dark">{recipe.cookTime}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green shrink-0">
                <ChefHat className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-ink-secondary">Difficulty</div>
                <div className="text-sm font-semibold text-ink-dark">{recipe.difficulty}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-orange-50 text-accent-orange shrink-0">
                <Flame className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-ink-secondary">Calories</div>
                <div className="text-sm font-semibold text-ink-dark">{recipe.calories} cal</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green shrink-0">
                <Apple className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-ink-secondary">Category</div>
                <div className="text-sm font-semibold text-ink-dark">{recipe.category}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-16 bg-surface-light">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left: Description + Instructions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-6 lg:p-8 bg-white">
                <h2 className="font-display text-xl font-bold text-ink-dark mb-3">About This Recipe</h2>
                <p className="text-base text-ink-secondary leading-relaxed">{recipe.description}</p>
              </div>

              <div className="card p-6 lg:p-8 bg-white">
                <h2 className="font-display text-xl font-bold text-ink-dark mb-5 flex items-center gap-2">
                  <ListOrdered className="h-5 w-5 text-brand-green" />
                  Step-by-Step Instructions
                </h2>
                <ol className="space-y-5">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-ink-secondary leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Nutrition */}
              <div className="card p-6 lg:p-8 bg-white">
                <h2 className="font-display text-xl font-bold text-ink-dark mb-5 flex items-center gap-2">
                  <Apple className="h-5 w-5 text-brand-green" />
                  Nutrition Information
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {nutritionItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-surface-light p-4 text-center"
                    >
                      <div className="font-display text-xl font-bold text-brand-green">
                        {item.value}
                      </div>
                      <div className="text-xs text-ink-secondary mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ink-muted mt-4">
                  Nutritional values are approximate and may vary based on ingredients used.
                </p>
              </div>
            </div>

            {/* Right: Ingredients + Save */}
            <div className="space-y-6">
              <div className="card p-6 lg:p-8 bg-white lg:sticky lg:top-40">
                <h2 className="font-display text-xl font-bold text-ink-dark mb-5">
                  Ingredients
                </h2>
                <ul className="space-y-3 mb-6">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-dark">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green-50 text-brand-green shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    saved
                      ? 'bg-brand-green-50 text-brand-green'
                      : 'bg-brand-green text-white shadow-glow hover:bg-brand-green-dark hover:-translate-y-0.5'
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                  {saved ? 'Recipe Saved!' : 'Save Recipe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
