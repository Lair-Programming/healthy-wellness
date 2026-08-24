import {
  UtensilsCrossed,
  BookOpen,
  HeartPulse,
  ShoppingBasket,
  Sprout,
  CheckCircle2,
  ChefHat,
  Clock,
  Leaf,
  Award,
  Sparkles,
  ShieldCheck,
  Recycle,
  Smile,
  Truck,
  CalendarCheck,
  Stethoscope,
  Package,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  BookOpen,
  HeartPulse,
  ShoppingBasket,
  Sprout,
  CheckCircle2,
  ChefHat,
  Clock,
  Leaf,
  Award,
  Sparkles,
  ShieldCheck,
  Recycle,
  Smile,
  Truck,
  CalendarCheck,
  Stethoscope,
  Package,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Leaf;
}
