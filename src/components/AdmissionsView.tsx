import React from 'react';
import { Icon } from './Icon';
import { AdmissionForm } from './AdmissionForm';

export const AdmissionsView: React.FC = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* HEADER HERO */}
      <section className="bg-brand-primary text-white py-16 -mt-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.15),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase bg-brand-secondary/10 px-3 py-1 rounded-full">
            Admissions 2026/2027
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Join Wells International Scholar Body</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Guiding you transparently through every stage of high-standard educational placement.
          </p>
        </div>
      </section>

      {/* 1. ADMISSION TIMELINE PROCESS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
            Four Simple Stages
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900 mt-1">Our Placement Journey</h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Timeline stage 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left relative space-y-3">
            <span className="absolute top-4 right-4 font-mono font-bold text-3xl text-brand-secondary/30">01</span>
            <div className="w-10 h-10 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
              <Icon name="FileText" size={18} />
            </div>
            <h4 className="font-display font-bold text-slate-800 text-base">Inquiry & Registry</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Complete Path B digital application form below or download and study our digital prospectus brochures.
            </p>
          </div>

          {/* Timeline stage 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left relative space-y-3">
            <span className="absolute top-4 right-4 font-mono font-bold text-3xl text-brand-secondary/30">02</span>
            <div className="w-10 h-10 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
              <Icon name="Award" size={18} />
            </div>
            <h4 className="font-display font-bold text-slate-800 text-base">Diagnostic Testing</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Candidates complete early diagnostic screenings in mathematics, core logic, and reading comprehension.
            </p>
          </div>

          {/* Timeline stage 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left relative space-y-3">
            <span className="absolute top-4 right-4 font-mono font-bold text-3xl text-brand-secondary/30">03</span>
            <div className="w-10 h-10 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
              <Icon name="Users" size={18} />
            </div>
            <h4 className="font-display font-bold text-slate-800 text-base">Family Interview</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              We chat together with prospective candidates and patterns to align career targets and student character.
            </p>
          </div>

          {/* Timeline stage 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left relative space-y-3">
            <span className="absolute top-4 right-4 font-mono font-bold text-3xl text-brand-secondary/30">04</span>
            <div className="w-10 h-10 bg-blue-50 text-brand-secondary rounded-xl flex items-center justify-center">
              <Icon name="CheckCircle2" size={18} />
            </div>
            <h4 className="font-display font-bold text-slate-800 text-base">Clearance & Intake</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Approved students receive official admission code letters, uniform profiles, and class orientations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REQUIREMENTS & FEES ESTIMATES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Col: Core Requirements */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
              <h3 className="text-2xl font-display font-bold text-brand-primary">Admission Requirements Checklist</h3>
              <p className="text-slate-500 text-sm">
                Please prepare the following legal certifications to bring into formal diagnostic testing interviews:
              </p>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-650">
                <li className="flex gap-2.5 items-start">
                  <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Official Birth Certificate or valid passports copy.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Most recent 2 years of scholastic transcripts and character commentary letters.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Transfer Certificate (TC) from prior accredited colleges (senior scholars).</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Two physical copies of parent passport-sized coordinates.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Icon name="Check" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Immunization schedules & medical clearances signed by verified laboratories.</span>
                </li>
              </ul>
            </div>

            {/* Right Col: Flexible Academic Tuition */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
              <h3 className="text-2xl font-display font-bold text-brand-primary">Tuition Fees Guidance</h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Wells International believes in financial transparency. Our fees are computed on a per-term scale (three terms per calendar session) covering biotech libraries, software licenses, labs, and base sporting kits.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-105">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-105 text-slate-400 font-bold">
                      <th className="p-3">DIVISION</th>
                      <th className="p-3">TERM TUITION FEES</th>
                      <th className="p-3">DENTAL & SPORT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold text-brand-primary">Creche & Nursery</td>
                      <td className="p-3">₦350,000 / Term</td>
                      <td className="p-3">Included</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-brand-primary">Primary Years 1 - 6</td>
                      <td className="p-3">₦480,000 / Term</td>
                      <td className="p-3">₦25,000 / Session</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-brand-primary">Secondary JSS 1 - SSS 3</td>
                      <td className="p-3">₦650,000 / Term</td>
                      <td className="p-3">₦40,000 / Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Installments & Scholar allowance */}
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/40">
                <span className="block text-xs font-bold text-brand-secondary uppercase mb-1">Tuition Allowances</span>
                <p className="text-[11px] text-slate-550 leading-relaxed">
                  Enjoy sibling discounts (10% rebate starting on second enrollments) and flexible installment timetables. Elite scholar full scholarships are awarded annually according to high scores in entrance diagnostic panels.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SUBMISSION ADMISSION DIGITAL DESK */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-secondary tracking-widest block uppercase">
            Interactive Registry
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900 mt-1">Begin Your Registration</h2>
          <div className="h-1 w-16 bg-brand-secondary mx-auto mt-3 rounded"></div>
        </div>

        {/* Form component embed */}
        <AdmissionForm />
      </section>
    </div>
  );
};
