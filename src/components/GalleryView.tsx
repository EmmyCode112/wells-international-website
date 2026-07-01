import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { galleryData } from '../data';
import { GalleryItem } from '../types';

export const GalleryView: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Life' },
    { id: 'academics', label: 'Academics' },
    { id: 'sports', label: 'Sports & Varsity' },
    { id: 'events', label: 'Events & Assemblies' },
    { id: 'excursions', label: 'Excursions' },
    { id: 'graduation', label: 'Graduation Caps' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter((item) => item.category === filter);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((idx) => {
        const nextIdx = (idx! - 1 + filteredItems.length) % filteredItems.length;
        return nextIdx;
      });
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((idx) => {
        const nextIdx = (idx! + 1) % filteredItems.length;
        return nextIdx;
      });
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* HEADER HERO */}
      <section className="bg-brand-primary text-white py-16 -mt-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.15),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Media Campus Vaults
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Wells International Gallery</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            An authentic photographic record of academic rigor, athletic championships, and creative arts assemblies.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS ROW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold border transition ${
                filter === cat.id
                  ? 'bg-brand-secondary border-brand-secondary text-white shadow'
                  : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* PHOTO MASONRY RESPONSIVE GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/40 cursor-pointer bg-slate-50"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Grid image cover with quick metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="bg-brand-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase self-start mb-2 tracking-widest">
                    {item.category}
                  </span>
                  <h4 className="text-white font-display text-sm font-semibold truncate">
                    {item.title}
                  </h4>
                  <p className="text-slate-350 text-[11px] truncate">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 text-slate-400 font-display">
            No image files loaded in this category block.
          </div>
        )}
      </section>

      {/* LIGHTBOX INTERACTIVE COMPONENT MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur"
            ></motion.div>

            {/* Close trigger handles */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-secondary bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-10"
              title="Close image view"
            >
              <Icon name="X" size={24} />
            </button>

            {/* Slider frame content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full z-10 aspect-video md:aspect-auto md:max-h-[80vh] flex flex-col justify-center"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Master picture component */}
                <div className="relative h-[45vh] sm:h-[60vh] bg-black flex items-center justify-center">
                  <img
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Previous overlay button handler */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 text-white rounded-xl flex items-center justify-center transition active:scale-95"
                    title="Previous Snapshot"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </button>

                  {/* Next overlay button handler */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 text-white rounded-xl flex items-center justify-center transition active:scale-95"
                    title="Next Snapshot"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </button>
                </div>

                {/* Under image summary caption and details */}
                <div className="p-6 bg-slate-950 text-white border-t border-slate-800 md:flex justify-between items-center gap-6">
                  <div className="space-y-1 select-all">
                    <span className="bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {filteredItems[lightboxIndex].category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white pt-1">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="pt-4 md:pt-0 shrink-0 text-slate-500 text-xs">
                    Image {lightboxIndex + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
