import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  category: 'academic' | 'break' | 'pta' | 'sports' | 'graduation' | 'holiday' | 'exam';
  categoryLabel: string;
  description: string;
  time?: string;
  location?: string;
}

const calendarEvents: CalendarEvent[] = [
  {
    id: 'cal-1',
    title: 'Entrance Examination & Screening',
    date: '2026-07-05',
    category: 'exam',
    categoryLabel: 'Exams & Screening',
    description: 'First batch screening and computer-based entrance assessment for new primary and secondary candidates.',
    time: '08:00 AM - 01:00 PM',
    location: 'School ICT Center & Assembly Hall'
  },
  {
    id: 'cal-2',
    title: 'Class of 2026 Graduation Ceremony',
    date: '2026-07-16',
    category: 'graduation',
    categoryLabel: 'Graduation',
    description: 'Celebrating the achievements and commissioning of our elite Year 12 graduates.',
    time: '10:00 AM - 03:00 PM',
    location: 'Wells Grand Arena'
  },
  {
    id: 'cal-3',
    title: 'First Term Resumption Date (New & Returning)',
    date: '2026-09-07',
    category: 'academic',
    categoryLabel: 'Academic',
    description: 'All pupils and high school scholars resume classes for the start of the 2026/2027 Academic Session.',
    time: '07:30 AM',
    location: 'Main Campus'
  },
  {
    id: 'cal-4',
    title: 'First Term General PTA Meeting',
    date: '2026-10-10',
    category: 'pta',
    categoryLabel: 'PTA Meeting',
    description: 'Essential interactive forum between school board administration and parents to review curriculum progression and state-of-the-art laboratory deployments.',
    time: '11:00 AM - 01:30 PM',
    location: 'Assembly Hall / Online Stream'
  },
  {
    id: 'cal-5',
    title: 'Mid-Term Break',
    date: '2026-10-22',
    category: 'break',
    categoryLabel: 'Mid-Term Break',
    description: 'Mid-term recess for students. Teachers report for advanced professional development programs.',
    time: 'All Day Event',
    location: 'Off-Campus'
  },
  {
    id: 'cal-6',
    title: 'Mid-Term Break Continues',
    date: '2026-10-23',
    category: 'break',
    categoryLabel: 'Mid-Term Break',
    description: 'Second day of mid-term recess. Students rest, campus facilities undergo maintenance checks.',
    time: 'All Day Event',
    location: 'Off-Campus'
  },
  {
    id: 'cal-7',
    title: 'Annual Inter-House Sports Festival',
    date: '2026-11-28',
    category: 'sports',
    categoryLabel: 'Sports Day',
    description: 'A stellar showcase of athletic power, relays, cheerleading, and track events. Parents highly welcome!',
    time: '09:00 AM - 04:00 PM',
    location: 'Wells Sports Complex & Synthetic Track'
  },
  {
    id: 'cal-8',
    title: 'Christmas Break & Holidays Commence',
    date: '2026-12-18',
    category: 'holiday',
    categoryLabel: 'Holidays',
    description: 'End of Term 1. Campus closes for Christmas and New Year festive holidays.',
    time: 'Classes end at 01:00 PM',
    location: 'Off-Campus'
  },
  {
    id: 'cal-9',
    title: 'Second Term Resumption Date',
    date: '2027-01-08',
    category: 'academic',
    categoryLabel: 'Academic',
    description: 'Academic activities resume fully for the Winter/Second Term.',
    time: '07:30 AM',
    location: 'Main Campus'
  }
];

// Helper to get color values for categories
export const getCategoryStyles = (category: CalendarEvent['category']) => {
  switch (category) {
    case 'academic':
      return {
        bg: 'bg-blue-50 border-blue-100 text-blue-700',
        dot: 'bg-blue-500',
        badge: 'bg-blue-100 text-blue-800'
      };
    case 'break':
      return {
        bg: 'bg-amber-50 border-amber-100 text-amber-700',
        dot: 'bg-amber-500',
        badge: 'bg-amber-100 text-amber-800'
      };
    case 'pta':
      return {
        bg: 'bg-purple-50 border-purple-100 text-purple-700',
        dot: 'bg-purple-500',
        badge: 'bg-purple-100 text-purple-800'
      };
    case 'sports':
      return {
        bg: 'bg-emerald-50 border-emerald-100 text-emerald-700',
        dot: 'bg-emerald-500',
        badge: 'bg-emerald-100 text-emerald-800'
      };
    case 'graduation':
      return {
        bg: 'bg-indigo-50 border-indigo-100 text-indigo-700',
        dot: 'bg-indigo-500',
        badge: 'bg-indigo-100 text-indigo-800'
      };
    case 'exam':
      return {
        bg: 'bg-cyan-50 border-cyan-100 text-cyan-700',
        dot: 'bg-cyan-500',
        badge: 'bg-cyan-100 text-cyan-800'
      };
    case 'holiday':
    default:
      return {
        bg: 'bg-rose-50 border-rose-100 text-rose-700',
        dot: 'bg-rose-500',
        badge: 'bg-rose-100 text-rose-800'
      };
  }
};

const MONTHS_MAP = [
  { name: 'July 2026', year: 2026, month: 6 }, // 0-indexed in JS dates
  { name: 'September 2026', year: 2026, month: 8 },
  { name: 'October 2026', year: 2026, month: 9 },
  { name: 'November 2026', year: 2026, month: 10 },
  { name: 'December 2026', year: 2026, month: 11 },
  { name: 'January 2027', year: 2027, month: 0 }
];

export const SchoolCalendar: React.FC = () => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(2); // Start at October 2026
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(calendarEvents.find(e => e.id === 'cal-5') || null);

  const currentMonthConfig = MONTHS_MAP[selectedMonthIndex];
  
  // Calculate calendar days
  const year = currentMonthConfig.year;
  const month = currentMonthConfig.month;
  
  // First day of current month
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
  // Number of days in current month
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  const calendarDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayIndex }, (_, i) => i);

  // Filter events
  const filteredEvents = calendarEvents.filter((item) => {
    const matchCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchCategory;
  });

  // Check if a day has events
  const getEventsForDay = (day: number) => {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
    return calendarEvents.filter(e => e.date === dateStr);
  };

  const handleMonthPrev = () => {
    setSelectedMonthIndex((prev) => (prev > 0 ? prev - 1 : MONTHS_MAP.length - 1));
  };

  const handleMonthNext = () => {
    setSelectedMonthIndex((prev) => (prev < MONTHS_MAP.length - 1 ? prev + 1 : 0));
  };

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'academic', label: 'Academic' },
    { id: 'break', label: 'Breaks' },
    { id: 'pta', label: 'PTA' },
    { id: 'sports', label: 'Sports' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'exam', label: 'Exams' },
    { id: 'holiday', label: 'Holidays' }
  ];

  return (
    <div id="school-calendar-container" className="bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden">
      
      {/* Calendar Header section */}
      <div className="bg-brand-primary p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold flex items-center gap-2">
            <Icon name="Calendar" size={24} className="text-brand-secondary" />
            Interactive Academic Calendar
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-light mt-1">
            Browse scholastic terms, sports festivals, examinations, and official recesses.
          </p>
        </div>
        
        {/* Category filtering pills */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase transition border ${
                filterCategory === cat.id
                  ? 'bg-brand-secondary border-brand-secondary text-white'
                  : 'bg-white/10 border-white/5 text-slate-200 hover:bg-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-slate-100">
        
        {/* Grid column 1: Visual Interactive Calendar Grid (8 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
          
          {/* Month Navigator Header */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={handleMonthPrev}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition"
              aria-label="Previous month"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            
            <h4 className="font-display font-bold text-lg text-slate-805 text-center px-4">
              {currentMonthConfig.name}
            </h4>

            <button 
              onClick={handleMonthNext}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition"
              aria-label="Next month"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 mb-2 font-mono">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-sm">
            {/* Empty boxes for offset */}
            {emptyDays.map((empty) => (
              <div key={`empty-${empty}`} className="h-10 sm:h-14 rounded-xl"></div>
            ))}
            
            {/* Days list */}
            {calendarDays.map((day) => {
              const dayEvents = getEventsForDay(day);
              const hasEvents = dayEvents.length > 0;
              const isSelected = selectedEvent && dayEvents.some(e => e.id === selectedEvent.id);

              return (
                <div
                  key={`day-${day}`}
                  onClick={() => {
                    if (hasEvents) {
                      setSelectedEvent(dayEvents[0]);
                    }
                  }}
                  className={`h-10 sm:h-14 rounded-2xl flex flex-col justify-between p-1.5 cursor-pointer relative transition border ${
                    isSelected
                      ? 'bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/20'
                      : hasEvents
                      ? 'bg-slate-50 hover:bg-brand-primary/5 border-brand-secondary/30 text-slate-800 font-semibold'
                      : 'border-transparent text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-xs ${isSelected ? 'text-white font-black' : 'text-slate-700 font-medium'}`}>
                    {day}
                  </span>
                  
                  {/* Event indicators */}
                  <div className="flex gap-1 justify-center">
                    {dayEvents.map((ev, idx) => (
                      <span
                        key={ev.id}
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? 'bg-white' : getCategoryStyles(ev.category).dot
                        }`}
                        title={ev.title}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mini Guide */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Academic
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Breaks
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> PTA Meetings
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Sports Day
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Holidays
            </span>
          </div>

        </div>

        {/* Grid column 2: Details panel (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 flex flex-col justify-between">
          <div>
            <h4 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest mb-4">
              Event Breakdown
            </h4>

            <AnimatePresence mode="wait">
              {selectedEvent ? (
                <motion.div
                  key={selectedEvent.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    getCategoryStyles(selectedEvent.category).badge
                  }`}>
                    {selectedEvent.categoryLabel}
                  </span>

                  <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                    {selectedEvent.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2.5">
                      <Icon name="Calendar" size={16} className="text-brand-secondary shrink-0" />
                      <span className="font-semibold">
                        {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    {selectedEvent.time && (
                      <div className="flex items-center gap-2.5">
                        <Icon name="Clock" size={16} className="text-brand-secondary shrink-0" />
                        <span>{selectedEvent.time}</span>
                      </div>
                    )}

                    {selectedEvent.location && (
                      <div className="flex items-center gap-2.5">
                        <Icon name="MapPin" size={16} className="text-brand-secondary shrink-0" />
                        <span className="font-light">{selectedEvent.location}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light bg-white p-4 rounded-2xl border border-slate-100">
                    {selectedEvent.description}
                  </p>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-sm font-light">
                  <Icon name="Calendar" size={40} className="mx-auto text-slate-300 mb-2" />
                  Select an event from the calendar grid to inspect details.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick List for filtered events */}
          <div className="mt-8 border-t border-slate-200/60 pt-6">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Upcoming Session Highlights
            </h5>
            
            <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
              {filteredEvents.slice(0, 4).map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvent(ev)}
                  className={`p-3 rounded-xl border transition flex items-center justify-between gap-3 cursor-pointer ${
                    selectedEvent?.id === ev.id
                      ? 'bg-white border-brand-secondary shadow-sm'
                      : 'bg-white/40 hover:bg-white border-slate-200/50'
                  }`}
                >
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 font-mono block">
                      {new Date(ev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-xs font-semibold text-slate-805 truncate block">
                      {ev.title}
                    </span>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${getCategoryStyles(ev.category).dot}`} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
