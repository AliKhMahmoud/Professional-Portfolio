import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, User, MessageSquare, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { TestimonialCard } from '../testimonials/TestimonialCard';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';

interface ContactSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast }) => {
  const { contact, testimonials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
        });
      } catch (err) {
        // ignore
      }

      if (onSuccessToast) {
        onSuccessToast("Thank you! Your message has been sent successfully. I'll get back to you shortly.");
      }

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3500);
    }, 900);
  };

  const renderSocialIcon = (icon: string) => {
    const iconClass = "w-4 h-4";
    switch (icon) {
      case 'github':
        return <GithubIcon className={iconClass} />;
      case 'linkedin':
        return <LinkedinIcon className={iconClass} />;
      case 'instagram':
        return <InstagramIcon className={iconClass} />;
      default:
        return <Mail className={iconClass} />;
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Col 1-7): Inline Contact Form */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <SectionBadge variant="purple" className="mb-2">
                Let's Work Together
              </SectionBadge>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
                Have a project in mind?
              </h2>

              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed pt-1 max-w-xl">
                I'm always open to discussing new projects, high-impact opportunities, and creative collaborations. Send me a message below!
              </p>
            </div>

            {/* Direct Inline Form Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 dark:bg-[#0d1222]/90 light:bg-white border border-slate-800/90 dark:border-slate-800 light:border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xs mx-auto">
                    Thank you for reaching out. I'll review your project details and reply promptly to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                      Project Type / Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-all"
                    >
                      <option value="" className="bg-slate-900 text-slate-400">Select project scope</option>
                      <option value="Full-Stack Application" className="bg-slate-900 text-white">Full-Stack Web App Development</option>
                      <option value="Frontend Development" className="bg-slate-900 text-white">Frontend (React / TypeScript / Tailwind)</option>
                      <option value="Backend & Database" className="bg-slate-900 text-white">Backend APIs (Node.js / Express / Postgres / Mongo)</option>
                      <option value="Freelance / Consultation" className="bg-slate-900 text-white">Freelance Project or Full-time Role</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, timeline, or idea..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (Col 8-12): Follow Me & Direct Contact ON TOP, Testimonial Card BELOW */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Top Card: Contact Info & Follow Me */}
            <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-[#0d1222]/80 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 shadow-md space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                  Follow Me
                </h3>

                {/* Social Icons Row */}
                <div className="flex items-center gap-2.5">
                  {contact.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.platform}
                      className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-[#090d16] light:bg-slate-100 border border-slate-700/60 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-indigo-600 hover:border-indigo-500/50 hover:bg-slate-700 transition-all hover:-translate-y-0.5 shadow-sm"
                    >
                      {renderSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="space-y-3 pt-3 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-100 text-xs sm:text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium truncate">{contact.email}</span>
                </a>

                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{contact.phone}</span>
                </a>

                {contact.location && (
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-400 light:text-slate-600 pt-1">
                    <div className="p-2 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs">{contact.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Card: Testimonial Quote Card (placed right below Follow Me) */}
            <div>
              {testimonials.length > 0 && (
                <TestimonialCard testimonial={testimonials[0]} />
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
