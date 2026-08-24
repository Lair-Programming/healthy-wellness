import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { Meal } from '@/data/content';

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <article className="card group overflow-hidden flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={meal.image}
          alt={meal.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-green">
          {meal.category}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-brand-green text-white px-3 py-1 text-sm font-bold shadow-md">
          ${meal.price.toFixed(2)}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-ink-dark mb-1.5">
          {meal.name}
        </h3>
        <p className="text-sm text-ink-secondary mb-3 line-clamp-2">{meal.description}</p>
        <div className="flex items-center gap-1 text-xs text-ink-secondary mb-4">
          <Clock className="h-3.5 w-3.5 text-brand-green" />
          <span>{meal.calories} calories</span>
        </div>
        <Link
          to="/services"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-green-50 px-4 py-2.5 text-sm font-semibold text-brand-green transition-all duration-200 hover:bg-brand-green hover:text-white"
        >
          View Meal
        </Link>
      </div>
    </article>
  );
}
