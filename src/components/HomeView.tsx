import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  statsData, 
  featuresData, 
  programsData, 
  galleryData, 
  testimonialsData, 
  newsData,
  facilitiesData
} from '../data';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "When does admission start?",
    answer: "Admissions for the 2026/2027 Academic Session are active now. Entrance examinations and placement diagnostic testings are organized in bi-weekly batches beginning July 5th."
  },
  {
    question: "What classes do you offer?",
    answer: "We offer rich educational pathways across three academic sections: Early Nursery School (Ages 2-5), Primary Basic School (Ages 5-11), and Advanced Secondary School (Ages 11-18)."
  },
  {
    question: "Do you have a school bus?",
    answer: "Yes, we operate an ultra-secure, fully air-conditioned student transport fleet equipped with dynamic satellite GPS trackers servicing major residential hubs."
  },
  {
    question: "Do you offer boarding?",
    answer: "No, Wells International operates strictly as a Day Academy to ensure child-family bonding, backed by highly supervised after-school tutoring clubs and sports development programs."
  },
  {
    question: "What are your school hours?",
    answer: "Academic classes commence promptly at 7:45 AM and conclude at 2:15 PM. Optional co-curricular clubs, athletic practices, and creative labs operate until 4:00 PM."
  }
];

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // High-visibility, spring-loaded entrance animations that occur only once per scroll.
  const cardPopIn = {
    hidden: { opacity: 0, scale: 0.88, y: 45 },
    visible: (customIndex: number = 0) => ({ 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 110, 
        damping: 13, 
        mass: 0.75,
        delay: customIndex * 0.07
      } 
    })
  };

  const imagePopIn = {
    hidden: { opacity: 0, scale: 0.93, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textSlideUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  const scrollRevealVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 35 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-slate text-white mt-[-20px]">
        {/* Full-width, auto-playing, muted, looping premium video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center opacity-25 transform scale-105"
            poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-university-hallway-40432-large.mp4"
              type="video/mp4"
            />
            {/* Graceful image fallback inside the player */}
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600" 
              alt="Wells International Campus Entrance Fallback" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-brand-slate/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-transparent to-brand-slate/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="lg:col-span-8 space-y-6"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/20 border border-brand-secondary/35 text-brand-secondary text-xs sm:text-sm font-semibold tracking-wide rounded-full uppercase">
                <Icon name="Award" size={14} />
                Accredited World-Class Education
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-tight"
              >
                Inspiring <span className="text-brand-secondary text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-400">Leadership</span>, Achieving Academic Excellence
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Welcome to <strong className="text-white font-medium">Wells International Schools</strong>. We integrate Ivy-league teaching frameworks, advanced biotech labs, and character forging to mold future global giants.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-medium rounded-xl shadow-lg shadow-brand-secondary/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group transform active:scale-95"
                >
                  Apply Online Now
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  Examine Our History
                </button>
              </motion.div>
            </motion.div>

            {/* Float Badge/Visual Side Grid on Large Screens */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="hidden lg:block lg:col-span-4"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl relative">
                <div className="absolute top-[-15px] left-[-15px] bg-brand-secondary text-white p-3 rounded-2xl shadow-lg">
                  <Icon name="GraduationCap" size={24} />
                </div>
                
                <h4 className="text-lg font-display font-medium mb-3 pt-4 text-white">Enrollment Highlights</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>Dual Syllabus: Cambridge IGCSE & WAEC Accredited</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>Laptops program & Advanced Computer Science</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>25+ Active Co-curricular Clubs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8"
      >
        <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-xl relative mt-[-80px] z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-100/80">
            {statsData.map((stat, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={cardPopIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-center space-y-2 pt-6 first:pt-0 lg:pt-0"
              >
                <div className="text-4xl md:text-5xl tracking-tight text-brand-primary">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. WHY CHOOSE OUR SCHOOL (FEATURES) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase">
            A Better Future
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Why Wells International Stands Apart
          </h2>
          <div className="h-1 w-20 bg-brand-secondary mx-auto rounded"></div>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide a healthy ecosystem designed to mold balanced youngsters with technological, cognitive, and physical capabilities to command space anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardPopIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 text-left space-y-4"
            >
              <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center">
                <Icon name={feature.icon} size={24} className="text-brand-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-805">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. PRINCIPAL'S WELCOME MESSAGE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="bg-slate-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Principal Image Portrait */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={imagePopIn}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-brand-secondary rounded-3xl transform rotate-3 scale-100"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                alt="Principal Evelyn Brooks" 
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-lg border-2 border-white"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-brand-primary text-white py-2.5 px-4 rounded-xl shadow-lg font-mono text-xs">
                PROF. DR. EVELYN BROOKS
              </div>
            </motion.div>

            {/* Principal Welcome Message Text */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={textSlideUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase block">
                Leadership Handshake
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
                Principal's Welcome Note
              </h2>
              <div className="h-1 w-16 bg-brand-secondary rounded"></div>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  It is my absolute privilege to welcome you to <strong>Wells International Schools</strong>. Our campus is not merely a collection of brick and advanced computer nodes, but a living breathing ecosystem of infinite possibilities.
                </p>
                <p>
                  We believe that every child is genetically coded for singular brilliance. Our mission is to excavate that brilliance, whether it is in atomic calculation, spatial robotics, professional soccer, or humanitarian advocacy.
                </p>
                <p>
                  By marrying international dual-literacy curriculums with certified physical sports and creative arts, we ensure our graduates matriculate not only with high test scores, but with robust character, empathy, and absolute readiness to command attention on the world stage.
                </p>
              </div>

              {/* Signature Board */}
              <div className="pt-6 flex items-center gap-6 border-t border-slate-200">
                <div>
                  <span className="block font-display text-slate-800 font-bold">Prof. Dr. Evelyn Brooks, PhD</span>
                  <span className="block text-xs text-slate-400 font-medium">Principal & Executive Director</span>
                </div>
                {/* Simulated handwritten signature */}
                <span className="font-display text-2xl italic tracking-widest text-brand-secondary select-none opacity-80 border-l border-slate-200 pl-6 py-2">
                  E. Brooks
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. PROGRAMS SECTION (ACADEMIC LEVELS) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase">
            Divisions of Study
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Our Academic Programs
          </h2>
          <div className="h-1 w-20 bg-brand-secondary mx-auto rounded"></div>
          <p className="text-slate-600 text-base leading-relaxed">
            Carefully curated development tracks built specifically to optimize developmental cognitive phases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programsData.map((prog, idx) => (
            <motion.div 
              key={idx} 
              custom={idx}
              variants={cardPopIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden group">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-brand-slate text-brand-secondary text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow">
                    {prog.ageRange}
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-brand-primary">{prog.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{prog.description}</p>
                  
                  {/* Subject tags preview */}
                  <div className="pt-2">
                    <span className="block text-xs text-slate-400 font-bold mb-2 uppercase tracking-wider">Example Curricula</span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.subjects.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="bg-slate-50 text-slate-700 text-[11px] px-2.5 py-1 rounded bg-slate-100/50">
                          {sub}
                        </span>
                      ))}
                      {prog.subjects.length > 3 && (
                        <span className="text-brand-secondary text-[10px] font-bold self-center pl-1">
                          +{prog.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() => onNavigate('academics')}
                  className="w-full py-3 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white font-medium rounded-xl transition text-sm flex items-center justify-center gap-1 group"
                >
                  Explore Curriculum
                  <Icon name="ChevronRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5.5 SCHOOL FACILITIES SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="bg-slate-50 py-20 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase">
              Elite Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
              Our State-of-the-Art Facilities
            </h2>
            <div className="h-1 w-20 bg-brand-secondary mx-auto rounded"></div>
            <p className="text-slate-600 text-base leading-relaxed">
              We believe physical spaces shape intellectual trajectories. Explore our world-standard campus environments designed to foster high-level discovery and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilitiesData.map((fac, idx) => {
              let iconName = 'School';
              if (fac.title.toLowerCase().includes('classroom')) iconName = 'BookOpen';
              else if (fac.title.toLowerCase().includes('science')) iconName = 'FlaskConical';
              else if (fac.title.toLowerCase().includes('ict')) iconName = 'Cpu';
              else if (fac.title.toLowerCase().includes('library')) iconName = 'Library';
              else if (fac.title.toLowerCase().includes('bus')) iconName = 'Bus';
              else if (fac.title.toLowerCase().includes('playground')) iconName = 'Gamepad';
              else if (fac.title.toLowerCase().includes('sick')) iconName = 'Heart';
              else if (fac.title.toLowerCase().includes('sports')) iconName = 'Dribbble';

              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardPopIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 relative overflow-hidden shrink-0">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 bg-brand-secondary text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                      <Icon name={iconName} size={12} />
                      Campus Facility
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-bold text-slate-800">{fac.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                        {fac.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 6. GALLERY PREVIEW */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="bg-slate-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase block">
                Visual Portals
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
                Snapshots from School Life
              </h2>
              <div className="h-1 w-16 bg-brand-secondary rounded"></div>
            </div>
            
            <button
              onClick={() => onNavigate('gallery')}
              className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white text-sm font-medium rounded-xl shadow transition flex items-center gap-1.5"
            >
              Open Gallery Vault
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          {/* Grid Preview (first 4 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryData.slice(0, 4).map((item, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={cardPopIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative h-72 rounded-3xl overflow-hidden shadow border border-slate-200/50 cursor-pointer"
                onClick={() => onNavigate('gallery')}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradual overlay shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="bg-brand-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase self-start mb-2 tracking-widest">
                    {item.category}
                  </span>
                  <h4 className="text-white font-display text-sm font-semibold truncate">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs truncate">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIALS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase">
            Scholarly Vocals
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            What Parents & Alumni Experience
          </h2>
          <div className="h-1 w-20 bg-brand-secondary mx-auto rounded"></div>
        </div>

        {/* Carousel Container */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-10 right-10 text-slate-100/50 select-none hidden md:block">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-slate-100">
              <path d="M14.017 18v-7.375c0-2.455 1.911-4.42 4.395-4.42 1.545 0 2.518.662 3.018 1.156l-1.353 1.917c-.4-.35-.8-.5-.125-.5-1.41 0-2.55 1.16-2.55 2.571v1.156h4.5v5.5h-8.017zm-10.017 0v-7.375c0-2.455 1.91-4.42 4.395-4.42 1.545 0 2.518.662 3.018 1.156l-1.353 1.917c-.4-.35-.8-.5-.125-.5-1.411 0-2.551 1.16-2.551 2.571v1.156h4.5v5.5h-8.017z"/>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Reviewer picture */}
            <div className="shrink-0 text-center space-y-3">
              <img 
                src={testimonialsData[activeTestimonial].image} 
                alt={testimonialsData[activeTestimonial].name} 
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-blue-50 shadow-md"
              />
              <div>
                <h4 className="font-display font-bold text-slate-800 text-base">{testimonialsData[activeTestimonial].name}</h4>
                <span className="text-xs text-brand-secondary font-bold uppercase tracking-wider block">
                  {testimonialsData[activeTestimonial].role}
                </span>
                <span className="text-slate-400 text-xs block truncate max-w-[160px] mx-auto md:max-w-none">
                  {testimonialsData[activeTestimonial].relationship}
                </span>
              </div>
            </div>

            {/* Testimonial body with animation indicator */}
            <div className="flex-1 space-y-4">
              <p className="text-slate-600 font-light italic leading-relaxed text-sm sm:text-base md:text-lg">
                "{testimonialsData[activeTestimonial].comment}"
              </p>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-end gap-3 mt-6 border-t border-slate-50 pt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl flex items-center justify-center transition active:scale-95"
              aria-label="Previous Testimonial"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl flex items-center justify-center transition active:scale-95"
              aria-label="Next Testimonial"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 8. LATEST NEWS & SCHOOL BULLETIN */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="bg-slate-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase block">
                Wells International Gazette
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
                Latest News & Bulletins
              </h2>
              <div className="h-1 w-16 bg-brand-secondary rounded"></div>
            </div>
            
            <button
              onClick={() => onNavigate('news')}
              className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white text-sm font-medium rounded-xl shadow transition flex items-center gap-1.5"
            >
              Explore Full Bulletin
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={cardPopIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1 rounded-lg">
                      {news.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        {news.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        {news.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-display font-bold text-slate-805 line-clamp-2 hover:text-brand-secondary transition cursor-pointer" onClick={() => onNavigate('news')}>
                      {news.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('news')}
                    className="text-brand-secondary text-xs font-bold flex items-center gap-1 hover:underline group"
                  >
                    Read Detailed Article
                    <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 8.5 FAQ ACCORDION SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 py-12"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto rounded"></div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Here are immediate answers to the questions parents ask us most. For further inquiries, contact our registration office anytime.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left transition hover:bg-slate-50/50"
                >
                  <span className="font-display font-bold text-slate-800 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition ${isOpen ? 'bg-brand-secondary border-brand-secondary text-white' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                    <Icon name={isOpen ? "Minus" : "Plus"} size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50/80 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 9. CALL TO ACTION SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="max-w-7xl mx-auto px-6 sm:px-8"
      >
        <div className="bg-gradient-to-r from-brand-primary to-brand-slate text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left">
          {/* Dynamic background art */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary opacity-10 rounded-full blur-2xl -ml-20 -mb-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
                Now Enrolling
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold max-w-2xl leading-tight">
                Empower Your Child with a Forward-Thinking Education
              </h3>
              <p className="text-slate-350 text-sm md:text-base max-w-xl">
                Admissions for the 2026/2027 international term is currently active. Secure your diagnostic testing slot to lock in administrative allowances.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-center md:justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-6 py-4 bg-brand-secondary hover:bg-brand-secondary/90 transition text-white font-medium rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                Start Direct Application
                <Icon name="FileText" size={16} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 transition text-white font-medium rounded-xl flex items-center justify-center gap-1.5"
              >
                Contact Admissions Desk
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
