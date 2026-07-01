import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { SchoolMap } from './SchoolMap';

export const ContactView: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setSuccess(false);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* HEADER HERO */}
      <section className="bg-brand-primary text-white py-16 -mt-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.15),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Contact Our Campus</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Need directions, admission consultations, or transcript clearances? The Academy Registrar is on standby.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTACT INFO & FORM ROW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card Drawer Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase block mb-1">
                Direct Outlets
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-primary">
                Reach Wells International
              </h2>
              <div className="h-1 w-16 bg-brand-secondary mt-3 rounded"></div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Have quick questions? Get in touch with our admissions counsellors or academic directory directly via phone channels.
            </p>

            <div className="space-y-4 pt-2">
              {/* Telephone card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">TELEPHONE SUPPORT</span>
                  <span className="block text-slate-800 font-bold text-sm sm:text-base mt-0.5">+234 (0) 803 988 7766</span>
                  <span className="block text-slate-400 text-xs font-light">Working days: 8:00 AM - 4:00 PM (GMT +1)</span>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">EMAIL COMMUNICATION</span>
                  <span className="block text-brand-secondary font-bold text-sm sm:text-base mt-0.5">admissions@wellsintl.edu.ng</span>
                  <span className="block text-slate-400 text-xs font-light">General inquiries: office@wellsintl.edu.ng</span>
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={20} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">PHYSICAL LOCATION</span>
                  <span className="block text-slate-805 font-bold text-sm sm:text-base mt-0.5">12 Wells International Ave, Seaside Academic Estate</span>
                  <span className="block text-slate-400 text-xs font-light">Port Harcourt Sub-District, Niger Delta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Input Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-md">
            <h3 className="text-xl font-display font-bold text-brand-primary mb-1">Direct Message Dispatch</h3>
            <p className="text-slate-400 text-xs mb-6">
              Complete the quick panel and our secretariat will forward your letter to the appropriate desk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1" htmlFor="contact-name">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Mrs. Chioma Archibong"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent text-sm text-slate-800 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1" htmlFor="contact-email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent text-sm text-slate-800 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="e.g. +234 80 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent text-sm text-slate-800 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1" htmlFor="contact-subject">
                    Subject Header
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent text-xs sm:text-sm text-slate-850 bg-white"
                  >
                    <option value="">Choose category</option>
                    <option value="admissions">Admission Desk consultation</option>
                    <option value="fees">Fees & Invoices inquiry</option>
                    <option value="transcripts">Transcripts & Clearances</option>
                    <option value="careers">Careers & Academic open slots</option>
                    <option value="other">Other general matters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1" htmlFor="contact-message">
                  How can we support you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Detail your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-205 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent text-sm text-slate-800 bg-white resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-medium rounded-xl text-sm transition-all shadow-md flex items-center gap-2 transform active:scale-95"
                >
                  Send Message
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED AT (4.77034, 7.92678) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
            Interact and Discover
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
            Global Satellite Mapping
          </h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
        </div>

        {/* Customized School Map iframe */}
        <SchoolMap />
      </section>

      {/* SUCCESS MODAL TRIGGER */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blocker backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleReset}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 border border-slate-100 text-center shadow-2xl space-y-4"
            >
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner ring-4 ring-green-100">
                <Icon name="Check" size={28} />
              </div>

              <h4 className="text-2xl font-display font-bold text-slate-805">Message Dispatched!</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thank you <strong className="text-slate-800">{name}</strong>. Your inquiry has been routed to our secretariat desks successfully.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-left text-xs text-slate-400 leading-relaxed border border-slate-100">
                <span className="block font-bold text-slate-500 tracking-wider mb-1 uppercase">REPLY PROCESS</span>
                A registrar counsel was alerted and will contact you back at <strong className="text-slate-700">{email}</strong> or over mobile channels within 12 business hours.
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-brand-primary text-white font-semibold rounded-xl text-sm hover:bg-brand-primary/95 transition shadow-lg"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
