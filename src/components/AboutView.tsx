import React from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { valuesData, facilitiesData, managementTeam } from '../data';

export const AboutView: React.FC = () => {
  // High-visibility scroll animation variants that trigger exactly once on scroll
  const cardPopIn = {
    hidden: { opacity: 0, scale: 0.90, y: 40 },
    visible: (idx: number = 0) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 14,
        mass: 0.8,
        delay: idx * 0.08
      }
    })
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
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
            Our Identity
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">About Wells International Schools</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Guiding young minds toward academic, ethical, and athletic leadership frontiers on a state-of-the-art campus.
          </p>
        </motion.div>
      </section>
 
      {/* 1. MISSION, VISION, VALUE STATEMENTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardPopIn}
            custom={0}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md relative overflow-hidden group hover:shadow-lg transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-2.5 h-full bg-brand-secondary"></div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
                <Icon name="Award" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-805">Our Mission</h3>
              <p className="text-slate-650 text-sm leading-relaxed font-light">
                To excavate individual brilliance and cultivate critical minds by delivering an immersive, technologically driven, and dual-accredited curriculum. We challenge standards, forge resilient characters, and instill a sense of active empathy inside an inclusive, secure academic community.
              </p>
            </div>
          </motion.div>
 
          {/* Vision Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardPopIn}
            custom={1}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md relative overflow-hidden group hover:shadow-lg transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-2.5 h-full bg-brand-primary"></div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center">
                <Icon name="Compass" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-805">Our Vision</h3>
              <p className="text-slate-650 text-sm leading-relaxed font-light">
                To be the global gold standard for early, primary, and senior secondary instruction in Africa — recognized worldwide for our technology-integrated curriculum, pioneering robotics, record-breaking SAT scores, and the creation of highly respectful global citizens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HISTORY (Alternating Layout) */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-slate-900">A Quarter Century of Leadership</h2>
            <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
          </div>

          <div className="space-y-12">
            {/* Alternating Row 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={imageReveal}
                className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-2xl shadow-md"
              >
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=605" 
                  alt="Our school foundation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={textSlideUp}
                className="w-full lg:w-1/2 space-y-4"
              >
                <div className="text-sm font-bold text-brand-secondary font-mono bg-blue-50 px-3 py-1 rounded inline-block">1999 - Founding Foundations</div>
                <h3 className="text-2xl font-display font-bold text-slate-805">The Spark of Brilliance</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  Wells International Schools commenced with forty eager primary pupils and a humble staff of eight accredited tutors. Driven by a revolutionary focus on bilingual mastery and practical natural sciences, our early campus quickly became noted for setting record high marks in regional academic performance indexes.
                </p>
              </motion.div>
            </div>

            {/* Alternating Row 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={imageReveal}
                className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-2xl shadow-md"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=605" 
                  alt="Digital transition" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={textSlideUp}
                className="w-full lg:w-1/2 space-y-4"
              >
                <div className="text-sm font-bold text-brand-secondary font-mono bg-blue-50 px-3 py-1 rounded inline-block">2012 - Digital Inception</div>
                <h3 className="text-2xl font-display font-bold text-slate-805">Inaugurating STEM Syllabus</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  Recognizing the emerging digital revolution, Wells International introduced mandatory algorithms, physical robotics workshops, and dedicated computer laboratories. We expanded to include our Secondary High School, integrating international WAEC certification and Cambridge secondary curriculums perfectly.
                </p>
              </motion.div>
            </div>

            {/* Alternating Row 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={imageReveal}
                className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-2xl shadow-md"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=605" 
                  alt="Modern futuristic campus" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={textSlideUp}
                className="w-full lg:w-1/2 space-y-4"
              >
                <div className="text-sm font-bold text-brand-secondary font-mono bg-blue-50 px-3 py-1 rounded inline-block">Present Day - Leaders of Tomorrow</div>
                <h3 className="text-2xl font-display font-bold text-slate-805">Forward-thinking Technology Sanctuary</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  Today, Wells International thrives as a multi-award winning institution with over 1,200 active pupils across nursery, primary, and secondary colleges. Equipped with clean solar fields, advanced bio-labs, and extensive arts galleries, we send scholars direct to global universities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
            Syllabus of Ethics
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900 mt-1">Our Core Values</h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val, idx) => (
            <motion.div 
              key={idx} 
              custom={idx}
              variants={cardPopIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md text-left space-y-4 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
                <Icon name={val.icon} size={20} className="text-brand-secondary" />
              </div>
              <h4 className="text-lg font-display font-bold text-slate-800">{val.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. MANAGEMENT TEAM SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
              Elite Custodians
            </span>
            <h2 className="text-3xl font-display font-bold text-slate-900 mt-1">Our Leadership Team</h2>
            <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={cardPopIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-72 relative overflow-hidden bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display font-bold text-lg text-slate-805">{member.name}</h3>
                    <span className="text-brand-secondary font-semibold text-xs uppercase tracking-wide block">{member.role}</span>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">{member.bio}</p>
                  </div>
                </div>
                
                <div className="p-6 pt-0 border-t border-slate-50 mt-auto">
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-3">
                    <Icon name="ShieldCheck" size={12} className="text-brand-secondary" />
                    Verified Academic Holder
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FACILITIES GALLERY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
            World-class Architecture
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900 mt-1">Our Campus Facilities</h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesData.map((fac, idx) => (
            <motion.div 
              key={idx} 
              custom={idx}
              variants={cardPopIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md group"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 pt-16">
                  <h3 className="text-white font-display text-xl font-bold">{fac.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-650 text-sm leading-relaxed font-light">{fac.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
