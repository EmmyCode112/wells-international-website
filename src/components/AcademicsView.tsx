import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { programsData } from '../data';
import { SchoolCalendar } from './SchoolCalendar';

export const AcademicsView: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<string>('secondary'); // Secondary default has rich content

  const activeProg = programsData.find((p) => p.id === activeDivision) || programsData[2];

  return (
    <div className="space-y-20 pb-16">
      {/* HEADER HERO */}
      <section className="bg-brand-primary text-white py-16 -mt-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.15),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Scholastic Excellence
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Academics Curriculum</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Our multi-accredited curriculum balances empirical scientific investigation with ethical decision making.
          </p>
        </div>
      </section>

      {/* SUB-TAB NAVIGATOR */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-md p-2 flex flex-col sm:flex-row gap-2">
          {programsData.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveDivision(prog.id)}
              className={`flex-1 py-3.5 px-6 rounded-xl font-display font-semibold transition text-sm sm:text-base ${
                activeDivision === prog.id
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {prog.title}
            </button>
          ))}
        </div>
      </section>

      {/* CORE SYLLABUS PANEL */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDivision}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src={activeProg.image}
                  alt={activeProg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-mono text-sm bg-brand-secondary px-3 py-1 rounded-lg">
                  {activeProg.ageRange}
                </div>
              </div>

              {/* Approach Summary Card */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left space-y-3">
                <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                  <Icon name="Compass" size={18} />
                  <span>Pedagogical Strategy</span>
                </div>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed italic">
                  "{activeProg.approach}"
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase block mb-1">
                  Section Overview
                </span>
                <h2 className="text-3xl font-display font-bold text-slate-900">
                  {activeProg.title} Division Curriculum
                </h2>
                <div className="h-1 w-16 bg-brand-secondary mt-3 rounded"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeProg.description}
              </p>

              {/* Subjects & Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Subjects Cards */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-brand-primary font-bold border-b border-slate-50 pb-3">
                    <Icon name="BookOpen" size={18} className="text-brand-secondary" />
                    <h4 className="font-display">Certified Subjects</h4>
                  </div>
                  <ul className="space-y-2.5 text-slate-600 text-xs sm:text-sm">
                    {activeProg.subjects.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={14} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities Cards */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-brand-primary font-bold border-b border-slate-50 pb-3">
                    <Icon name="Award" size={18} className="text-brand-secondary" />
                    <h4 className="font-display">Co-curricular Activities</h4>
                  </div>
                  <ul className="space-y-2.5 text-slate-600 text-xs sm:text-sm">
                    {activeProg.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={14} className="text-brand-secondary mt-0.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ACADEMIC CALENDAR SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Key Dates & Terms
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Interactive Academic Calendar
          </h2>
          <div className="h-1 w-20 bg-brand-secondary mx-auto rounded"></div>
          <p className="text-slate-500 text-sm max-w-xl mx-auto font-light">
            Keep track of the Wells International session milestones, examinations, and vacation schedules.
          </p>
        </div>
        <SchoolCalendar />
      </section>

      {/* ACCREDITATIONS & BOARD RECOGNITIONS */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-10">
          <h3 className="font-display font-bold text-2xl text-slate-800">Syllabus Boards & Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col items-center justify-center space-y-1">
              <span className="font-display font-black text-brand-primary text-xl tracking-wider">CAMBRIDGE</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">IGCSE ACCREDITED</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col items-center justify-center space-y-1">
              <span className="font-display font-black text-brand-primary text-xl tracking-wider">WAEC</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">COUNCIL RECOGNIZED</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col items-center justify-center space-y-1">
              <span className="font-display font-black text-brand-primary text-xl tracking-wider">NECO</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">NATIONAL PATHWAYS</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col items-center justify-center space-y-1">
              <span className="font-display font-black text-brand-primary text-xl tracking-wider">CIS</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">COUNCIL INT SCHOOLS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
