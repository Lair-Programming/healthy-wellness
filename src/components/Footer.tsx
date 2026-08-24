import { Link } from 'react-router-dom';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Recipes', path: '/recipes' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Meal Delivery', path: '/services' },
  { label: 'Meal Planning', path: '/services' },
  { label: 'Nutrition Consultation', path: '/services' },
  { label: 'Weekly Subscription', path: '/services' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-slate-300">
      <div className="container-page py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5" aria-label="WellnessHub home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                Wellness<span className="text-brand-green-light">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs mb-6">
              WellnessHub helps you live a healthier life through nutritious meals, simple recipes,
              and wellness services. Eat better, live better.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-brand-green hover:scale-110"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-brand-green-light transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-brand-green-light transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="h-4.5 w-4.5 mt-0.5 text-brand-green-light shrink-0" />
                <span>hello@wellnesshub.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="h-4.5 w-4.5 mt-0.5 text-brand-green-light shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4.5 w-4.5 mt-0.5 text-brand-green-light shrink-0" />
                <span>123 Wellness Street, Green City, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} WellnessHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-400 hover:text-brand-green-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-brand-green-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

