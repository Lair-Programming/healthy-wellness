import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { faqs } from '@/data/content';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@wellnesshub.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567',
    sub: 'Mon - Sat, 8am - 8pm',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Wellness Street',
    sub: 'Green City, CA 90210',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon - Sat: 8am - 8pm',
    sub: 'Sunday: Closed',
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[\d\s+()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        title="We'd Love to Hear From You"
        description="Have a question about our meals, recipes, or services? Send us a message and our team will get back to you within 24 hours."
        breadcrumb="Contact"
      />

      {/* Contact info cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info) => (
              <div key={info.label} className="card p-6 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green mb-4">
                  <info.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-dark mb-1">
                  {info.label}
                </h3>
                <p className="text-sm font-medium text-ink-dark mb-0.5">{info.value}</p>
                <p className="text-xs text-ink-secondary">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 lg:py-16 bg-surface-light">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="card p-6 lg:p-8 bg-white">
              <h2 className="font-display text-2xl font-bold text-ink-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-ink-secondary mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 rounded-xl bg-brand-green-50 border border-brand-green-200 p-4 flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-brand-green-dark">
                      Message sent successfully!
                    </p>
                    <p className="text-xs text-brand-green-dark/80 mt-0.5">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-dark mb-1.5">
                    Full Name <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-dark mb-1.5">
                      Email <span className="text-accent-orange">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-dark mb-1.5">
                      Phone <span className="text-accent-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="+1 (555) 000-0000"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-dark mb-1.5">
                    Subject <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${errors.subject ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-dark mb-1.5">
                    Message <span className="text-accent-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`input-field resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
                    placeholder="Tell us more about your inquiry..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Map + Social */}
            <div className="space-y-6">
              <div className="card overflow-hidden bg-white">
                <div className="relative aspect-[4/3] bg-surface-light">
                  <iframe
                    title="WellnessHub location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4430%2C34.0170%2C-118.3830%2C34.0470&layer=mapnik"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-dark mb-1">
                    Our Headquarters
                  </h3>
                  <p className="text-sm text-ink-secondary">
                    123 Wellness Street, Green City, CA 90210
                  </p>
                </div>
              </div>

              <div className="card p-6 bg-white">
                <h3 className="font-display text-lg font-semibold text-ink-dark mb-3">
                  Follow Us on Social Media
                </h3>
                <p className="text-sm text-ink-secondary mb-4">
                  Stay connected for daily healthy tips, recipes, and wellness inspiration.
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-light text-ink-dark transition-all duration-200 hover:bg-brand-green hover:text-white hover:scale-110"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label mb-4">FAQ</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-ink-secondary">
              Find quick answers to the most common questions about WellnessHub.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display text-base font-semibold text-ink-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand-green shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-ink-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Our friendly team is always here to help. Reach out and we'll make sure you get the answers you need."
        buttonText="Get Started"
        buttonLink="/services"
      />
    </>
  );
}
