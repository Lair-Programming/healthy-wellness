import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Leaf,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Recipes', path: '/recipes' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recipes?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="WellnessHub home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white shadow-glow">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold text-ink-dark">
            Wellness<span className="text-brand-green">Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brand-green bg-brand-green-50'
                    : 'text-ink-dark hover:text-brand-green hover:bg-surface-light'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-dark hover:bg-surface-light transition-colors"
            aria-label="Search recipes"
            aria-expanded={searchOpen}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/contact" className="btn-ghost">
            Login
          </Link>
          <Link to="/services" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-dark hover:bg-surface-light transition-colors"
            aria-label="Search recipes"
            aria-expanded={searchOpen}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-dark hover:bg-surface-light transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Search dropdown */}
      {searchOpen && (
        <div className="border-t border-slate-100 bg-white animate-fade-in">
          <div className="container-page py-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a healthy recipe..."
                className="input-field"
                aria-label="Search recipes"
              />
              <button type="submit" className="btn-primary shrink-0">
                <Search className="h-4 w-4" /> Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="container-page py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-green bg-brand-green-50'
                      : 'text-ink-dark hover:bg-surface-light'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 space-y-2">
              <Link to="/contact" className="block w-full text-center btn-secondary">
                Login
              </Link>
              <Link to="/services" className="block w-full text-center btn-primary">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
