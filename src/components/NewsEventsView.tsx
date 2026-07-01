import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { newsData } from '../data';
import { NewsItem } from '../types';
import { SchoolCalendar } from './SchoolCalendar';

export const NewsEventsView: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'news' | 'calendar'>('news');

  // Interactive high-end spring reveal variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 14,
        mass: 0.8,
        delay: idx * 0.06
      }
    })
  };

  const textReveal = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  // Filter Categories
  const categories = [
    { id: 'all', label: 'All Bulletins' },
    { id: 'news', label: 'Wells International News' },
    { id: 'event', label: 'School Events' },
    { id: 'announcement', label: 'School Announcements' }
  ];

  const filteredNews = newsData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(search.toLowerCase()) ||
                          item.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || item.category.toLowerCase() === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-16 overflow-hidden">
      {/* HEADER HERO */}
      <section className="bg-brand-primary text-white py-16 -mt-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.15),transparent)]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4"
        >
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Gazette & Press
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">News, Events, & Bulletins</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Stay up to date with specialized schedules, academic Olympiads, and athletic tournament timetables.
          </p>
        </motion.div>
      </section>

      {/* VIEW SELECTOR SUB-TABS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={textReveal}
          className="flex justify-center"
        >
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex shadow-inner">
            <button
              onClick={() => setActiveSubTab('news')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-display font-bold tracking-wide transition flex items-center gap-2 ${
                activeSubTab === 'news'
                  ? 'bg-white text-brand-primary shadow-sm'
                  : 'text-slate-500 hover:text-brand-primary'
              }`}
            >
              <Icon name="School" size={16} />
              Announcements & Bulletins
            </button>
            <button
              onClick={() => setActiveSubTab('calendar')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-display font-bold tracking-wide transition flex items-center gap-2 ${
                activeSubTab === 'calendar'
                  ? 'bg-white text-brand-primary shadow-sm'
                  : 'text-slate-500 hover:text-brand-primary'
              }`}
            >
              <Icon name="Calendar" size={16} />
              School Academic Calendar
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence mode="wait">
        {activeSubTab === 'calendar' ? (
          <motion.section
            key="calendar-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-7xl mx-auto px-6 sm:px-8"
          >
            <SchoolCalendar />
          </motion.section>
        ) : (
          <motion.div
            key="news-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            {/* SEARCH AND FILTERS */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={textReveal}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Search bar */}
                <div className="md:col-span-5 relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                    <Icon name="Search" size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search news posts, events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-205 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent bg-white text-slate-800 text-sm shadow-sm"
                  />
                </div>

                {/* Categories select row */}
                <div className="md:col-span-7 flex flex-wrap gap-2 justify-end">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-4 py-2 text-xs sm:text-sm rounded-xl font-display font-semibold transition border ${
                        category === cat.id
                          ? 'bg-brand-secondary border-brand-secondary text-white font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </section>

      {/* BULLETIN LIST */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, idx) => (
              <motion.div 
                key={item.id} 
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1 rounded-lg">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h3 
                      onClick={() => setSelectedNews(item)}
                      className="text-lg font-display font-bold text-slate-805 line-clamp-2 hover:text-brand-secondary transition cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="text-brand-secondary text-xs font-bold flex items-center gap-1 hover:underline group"
                  >
                    Open Full Report
                    <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
            <span className="text-slate-300 block text-3xl font-bold mb-2">?</span>
            <h4 className="font-display font-bold text-slate-705">No matches found</h4>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your spelling or choosing general categories.
            </p>
          </div>
        )}
      </section>

      {/* FULL READ MODAL DRAWER */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background blocker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            ></motion.div>

            {/* Main Modal container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl z-20 border border-slate-100 scrollbar-thin"
            >
              {/* Close Button handle */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-slate-50 hover:bg-slate-100 p-2 text-slate-500 hover:text-slate-800 rounded-full transition"
                title="Back to Bulletin board"
              >
                <Icon name="X" size={20} />
              </button>

              <div className="space-y-6">
                <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden relative">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-brand-primary text-xs font-bold px-3 py-1 rounded-lg">
                    {selectedNews.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {selectedNews.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={12} />
                      Ref: {selectedNews.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {selectedNews.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-slate-900 leading-tight">
                    {selectedNews.title}
                  </h3>
                </div>

                {/* Substantive content */}
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-2 border-t border-slate-100 font-light">
                  <p className="font-semibold text-slate-800">
                    {selectedNews.excerpt}
                  </p>
                  <p>
                    {selectedNews.content}
                  </p>
                  <p>
                    Wells International Schools prides itself on ensuring parents stay intimately aware of student calendars. For further deep questions, class schedules, or exam guidelines related to this announcement, please connect directly to our administrative office terminals.
                  </p>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-medium rounded-xl text-sm transition"
                  >
                    Back to Bulletins
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
