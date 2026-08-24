import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RecipeCard from '@/components/RecipeCard';
import CTASection from '@/components/CTASection';
import { recipes } from '@/data/content';

const categoryFilters = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
const tagFilters = ['Vegetarian', 'High Protein', 'Low Sugar'];

export default function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') ?? '');
  }, [searchParams]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAll = () => {
    setSearchQuery('');
    setActiveCategory(null);
    setActiveTags([]);
    setSearchParams({});
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        !searchQuery ||
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || recipe.category === activeCategory;
      const matchesTags =
        activeTags.length === 0 || activeTags.every((tag) => recipe.tags.includes(tag));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, activeCategory, activeTags]);

  const hasActiveFilters = searchQuery || activeCategory || activeTags.length > 0;

  return (
    <>
      <PageHero
        label="Recipes"
        title="Healthy Recipes Made Simple"
        description="Discover hundreds of nutritious recipes that are easy to make and delicious to eat. Filter by meal type, dietary preference, and more."
        breadcrumb="Recipes"
      />

      {/* Search & Filters */}
      <section className="py-8 lg:py-12 bg-white sticky top-16 lg:top-20 z-30 border-b border-slate-100">
        <div className="container-page">
          {/* Search bar */}
          <div className="relative max-w-2xl mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a healthy recipe..."
              className="w-full rounded-full border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-sm text-ink-dark placeholder:text-ink-muted transition-colors duration-200 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              aria-label="Search recipes"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-ink-dark shrink-0">
              <SlidersHorizontal className="h-4 w-4 text-brand-green" />
              Filter by:
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? null : cat)
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-green text-white shadow-md'
                      : 'bg-surface-light text-ink-dark hover:bg-brand-green-50 hover:text-brand-green'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
              <span className="w-px h-6 bg-slate-200 mx-1 hidden sm:block" />
              {tagFilters.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeTags.includes(tag)
                      ? 'bg-accent-orange text-white shadow-md'
                      : 'bg-surface-light text-ink-dark hover:bg-accent-orange-50 hover:text-accent-orange'
                  }`}
                  aria-pressed={activeTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink-secondary hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" /> Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recipe grid */}
      <section className="py-12 lg:py-16 bg-surface-light min-h-[40vh]">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-ink-secondary">
              Showing <span className="font-semibold text-ink-dark">{filteredRecipes.length}</span>{' '}
              {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
            </p>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface-light mb-4">
                <Search className="h-8 w-8 text-ink-muted" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-dark mb-2">
                No recipes found
              </h3>
              <p className="text-sm text-ink-secondary mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button onClick={clearAll} className="btn-secondary">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Our nutrition experts can help you create a personalized meal plan with recipes tailored to your taste and goals."
        buttonText="Get a Meal Plan"
        buttonLink="/services"
      />
    </>
  );
}
