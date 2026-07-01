import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { downloadProspectusDocument } from '../utils/prospectusGenerator';

interface StudentInfo {
  name: string;
  dob: string;
  gender: string;
  desiredClass: string;
}

interface ParentDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const AdmissionForm: React.FC = () => {
  const [activePath, setActivePath] = useState<'none' | 'pdf' | 'form'>('none');
  const [step, setStep] = useState<number>(1);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Form states
  const [student, setStudent] = useState<StudentInfo>({
    name: '',
    dob: '',
    gender: '',
    desiredClass: '',
  });

  const [parent, setParent] = useState<ParentDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [passport, setPassport] = useState<File | null>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [appId, setAppId] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validation
  const isStep1Valid = student.name.trim() !== '' && student.dob !== '' && student.gender !== '' && student.desiredClass !== '';
  const isStep2Valid = parent.name.trim() !== '' && parent.email.includes('@') && parent.phone.trim().length >= 8 && parent.address.trim() !== '';
  const isStep3Valid = passport !== null;

  const handleDownloadProspectus = () => {
    setDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      
      // Dynamic prospectus/physical admission form download
      downloadProspectusDocument();
      
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  const handleNextStep = () => {
    if (step === 1 && isStep1Valid) setStep(2);
    else if (step === 2 && isStep2Valid) setStep(3);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  };

  const handleFileSelected = (file: File) => {
    if (file.type.startsWith('image/')) {
      setPassport(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPassportPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep3Valid) return;

    // Generate random reference
    const timestamp = Date.now().toString().slice(-4);
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setAppId(`SA-2026-${timestamp}-${randomNum}`);
    setShowSuccessModal(true);
  };

  const handleResetForm = () => {
    setStudent({ name: '', dob: '', gender: '', desiredClass: '' });
    setParent({ name: '', email: '', phone: '', address: '' });
    setPassport(null);
    setPassportPreview(null);
    setStep(1);
    setActivePath('none');
    setShowSuccessModal(false);
  };

  return (
    <div id="admission-form-section" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-4xl mx-auto">
      {/* Upper Switch Header */}
      <div className="bg-brand-primary text-white p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary opacity-10 rounded-full blur-2xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary opacity-10 rounded-full blur-xl -ml-24 -mb-24"></div>
        
        <h3 className="text-3xl font-display font-medium mb-2">Admissions Hub</h3>
        <p className="text-slate-200 text-sm max-w-xl mx-auto">
          Choose between downloading our official prospectus portfolio or complete our direct digital entry form below.
        </p>

        {activePath === 'none' && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              id="path-selection-pdf"
              onClick={() => setActivePath('pdf')}
              className="px-6 py-3.5 bg-white text-brand-primary font-medium rounded-xl hover:bg-slate-50 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Icon name="Download" size={18} />
              Path A: Download Prospectus
            </button>
            <button
              id="path-selection-form"
              onClick={() => setActivePath('form')}
              className="px-6 py-3.5 bg-brand-secondary/90 hover:bg-brand-secondary text-white font-medium rounded-xl transition shadow-lg flex items-center justify-center gap-2 border border-brand-secondary"
            >
              <Icon name="FileText" size={18} />
              Path B: 3-Step Online Form
            </button>
          </div>
        )}

        {activePath !== 'none' && (
          <button
            onClick={() => {
              setActivePath('none');
              setStep(1);
            }}
            className="mt-6 text-xs text-brand-secondary hover:text-white flex items-center gap-1 mx-auto underline transition"
          >
            <Icon name="ChevronLeft" size={14} />
            Go back to Choice of Pathways
          </button>
        )}
      </div>

      <div className="p-8">
        {/* PATH A: PDF PROSPECTUS DOWNLOAD */}
        {activePath === 'pdf' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8 max-w-lg mx-auto"
          >
            <div className="w-20 h-20 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="BookOpen" size={36} className="text-brand-primary" />
            </div>
            <h4 className="text-2xl font-display text-slate-800 font-medium mb-3">Wells International Schools Digital Prospectus</h4>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Our comprehensive collegiate directory includes deep-dives into certified Cambridge schedules, global WAEC thresholds, athletic timetables, pricing plans, and specialized tech accelerators.
            </p>

            <button
              onClick={handleDownloadProspectus}
              disabled={downloading}
              className={`w-full py-4 rounded-xl font-medium shadow-md transition-all flex items-center justify-center gap-3 ${
                downloading 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-brand-primary text-white hover:bg-brand-primary/95 text-lg'
              }`}
            >
              {downloading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-300 border-t-brand-primary"></div>
                  Generating Prospectus Packet...
                </>
              ) : downloadSuccess ? (
                <>
                  <Icon name="Check" className="text-green-500 animate-bounce" size={20} />
                  Packet Downloaded Successfully!
                </>
              ) : (
                <>
                  <Icon name="Download" size={20} />
                  Download Now (PDF, 8.4 MB)
                </>
              )}
            </button>

            {downloadSuccess && (
              <p className="text-green-600 text-xs mt-3">
                If the download did not start automatically, please refresh or check your downloads drawer.
              </p>
            )}
          </motion.div>
        )}

        {/* PATH B: 3-STEP ONLINE ADMISSION FORM */}
        {activePath === 'form' && (
          <div>
            {/* Progress Bar & Steps Label */}
            <div className="mb-10">
              <div className="flex justify-between items-center text-sm mb-4">
                <span className="font-medium text-slate-500">
                  Step <span className="text-brand-primary font-bold">{step}</span> of 3
                </span>
                <span className="font-display font-medium text-brand-primary">
                  {step === 1 && 'Student Information'}
                  {step === 2 && 'Parent / Guardian Details'}
                  {step === 3 && 'Document Upload & Passport'}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-secondary transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>

              {/* Step Badges Row */}
              <div className="flex justify-between items-center mt-4 text-xs text-slate-400 font-medium">
                <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-brand-primary font-semibold' : ''}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>1</span>
                  <span>Student Profile</span>
                </div>
                <div className="h-[1px] bg-slate-100 flex-1 mx-3"></div>
                <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-brand-primary font-semibold' : ''}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>2</span>
                  <span>Parent Details</span>
                </div>
                <div className="h-[1px] bg-slate-100 flex-1 mx-3"></div>
                <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-brand-primary font-semibold' : ''}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>3</span>
                  <span>Passport Upload</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-6">
              {/* STEP 1: Student Profile */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="student-name">
                      Full Legal Name of Student <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      required
                      placeholder="e.g. Chimobi Amanda Alabi"
                      value={student.name}
                      onChange={(e) => setStudent({ ...student, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-800 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="student-dob">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="student-dob"
                        type="date"
                        required
                        value={student.dob}
                        onChange={(e) => setStudent({ ...student, dob: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-800 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="student-gender">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="student-gender"
                        required
                        value={student.gender}
                        onChange={(e) => setStudent({ ...student, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-850 bg-white"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="student-class">
                      Desired Division & Academy Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="student-class"
                      required
                      value={student.desiredClass}
                      onChange={(e) => setStudent({ ...student, desiredClass: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-850 bg-white"
                    >
                      <option value="">Choose Class Division</option>
                      <optgroup label="Nursery School">
                        <option value="creche">Creche (Ages 1 - 2)</option>
                        <option value="nursery-1">Nursery 1 (Ages 2 - 3)</option>
                        <option value="nursery-2">Nursery 2 (Ages 3 - 5)</option>
                      </optgroup>
                      <optgroup label="Primary School">
                        <option value="primary-1">Primary Year 1</option>
                        <option value="primary-3">Primary Year 3</option>
                        <option value="primary-5">Primary Year 5</option>
                      </optgroup>
                      <optgroup label="Secondary School">
                        <option value="junior-1">JSS 1 (Grade 7)</option>
                        <option value="junior-3">JSS 3 (Grade 9)</option>
                        <option value="senior-1">SSS 1 (Grade 10)</option>
                        <option value="senior-3">SSS 3 / IGCSE (Grade 12)</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={handleNextStep}
                      className={`px-8 py-3.5 rounded-xl font-medium transition flex items-center gap-2 shadow-sm ${
                        isStep1Valid
                          ? 'bg-brand-primary text-white hover:bg-brand-primary/95 hover:shadow'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Parent / Guardian Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="parent-name">
                      Parent / Legal Guardian Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="parent-name"
                      type="text"
                      required
                      placeholder="e.g. Chief Raymond Archibong"
                      value={parent.name}
                      onChange={(e) => setParent({ ...parent, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-800 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="parent-email">
                        Contact Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="parent-email"
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={parent.email}
                        onChange={(e) => setParent({ ...parent, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-800 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="parent-phone">
                        Contact Telephone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="parent-phone"
                        type="tel"
                        required
                        placeholder="+234 (0) 803 123 4567"
                        value={parent.phone}
                        onChange={(e) => setParent({ ...parent, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-800 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="parent-address">
                      Residential Home Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="parent-address"
                      required
                      rows={3}
                      placeholder="Street name, Residential complex, City State."
                      value={parent.address}
                      onChange={(e) => setParent({ ...parent, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-slate-805 bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <Icon name="ChevronLeft" size={16} />
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!isStep2Valid}
                      onClick={handleNextStep}
                      className={`px-8 py-3.5 rounded-xl font-medium transition flex items-center gap-2 shadow-sm ${
                        isStep2Valid
                          ? 'bg-brand-primary text-white hover:bg-brand-primary/95'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Document Upload / Passport Photograph */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <span className="block text-sm font-medium text-slate-700 mb-2">
                      Upload Student Passport Photo <span className="text-red-500">*</span>
                    </span>
                    <p className="text-slate-500 text-xs mb-4">
                      Should be a clear, front-looking portrait image (JPEG/PNG format, max size 5MB)
                    </p>

                    {/* Drag and drop Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-2xl p-8 cursor-pointer transition-all flex flex-col items-center justify-center ${
                        isDragging
                          ? 'border-brand-secondary bg-blue-50/50 scale-[0.99]'
                          : passport
                          ? 'border-green-500 bg-green-50/20'
                          : 'border-slate-200 hover:border-brand-secondary hover:bg-slate-50/50'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {passportPreview ? (
                        <div className="space-y-4">
                          <img
                            src={passportPreview}
                            alt="Passport Preview"
                            referrerPolicy="no-referrer"
                            className="w-32 h-32 rounded-xl object-cover shadow-md mx-auto border-4 border-white ring-4 ring-offset-2 ring-green-400"
                          />
                          <div>
                            <p className="text-sm font-medium text-slate-800">{passport?.name}</p>
                            <p className="text-xs text-slate-400">
                              {((passport?.size || 0) / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPassport(null);
                              setPassportPreview(null);
                            }}
                            className="px-4 py-1.5 text-xs font-semibold bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition inline-flex items-center gap-1"
                          >
                            <Icon name="X" size={12} />
                            Change Photograph
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="w-16 h-16 bg-blue-50 text-brand-secondary rounded-full flex items-center justify-center mx-auto">
                            <Icon name="UploadCloud" size={28} className="text-brand-secondary animate-pulse" />
                          </div>
                          <p className="font-display font-medium text-slate-700 text-sm">
                            Drag and drop file here, or <span className="text-brand-secondary font-bold underline">browse files</span>
                          </p>
                          <p className="text-slate-400 text-xs">Supports: JPG, JPEG, PNG</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <Icon name="ChevronLeft" size={16} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStep3Valid}
                      className={`px-8 py-3.5 rounded-xl font-medium transition flex items-center gap-2 shadow-md ${
                        isStep3Valid
                          ? 'bg-brand-secondary text-white hover:bg-brand-secondary/95 hover:shadow-lg'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Submit Official Application
                      <Icon name="CheckCircle2" size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        )}
      </div>

      {/* CONFIRMATION / SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleResetForm}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden z-10 border border-slate-100"
            >
              {/* Confetti decoration */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner ring-4 ring-green-100">
                  <Icon name="Check" size={32} className="text-green-500" />
                </div>

                <h4 className="text-3xl font-display font-bold text-slate-805">Application Submitted!</h4>
                
                <p className="text-slate-600 text-sm">
                  We have safely received <strong className="text-slate-800 font-semibold">{student.name}</strong>'s admissions dossier. The Registrar Academic Board is reviewing the credentials.
                </p>

                {/* Application Ticket Badge */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 my-6 text-left space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>REGISTRY REFERENCE NR.</span>
                    <span className="font-mono text-brand-secondary font-bold bg-blue-50 px-2 py-0.5 rounded">ONLINE</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-slate-800 tracking-wider text-center py-1 bg-white border border-slate-205/60 rounded-xl shadow-inner">
                    {appId}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100/80">
                    <div>
                      <span className="text-slate-400 block">STUDENT</span>
                      <span className="text-slate-700 font-medium truncate block">{student.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">DESIRED STAGE</span>
                      <span className="text-slate-700 font-medium uppercase block">{student.desiredClass.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-slate-500 leading-relaxed text-left space-y-1.5 pb-2">
                  <p className="flex items-start gap-1.5">
                    <Icon name="Check" size={14} className="text-brand-secondary mt-0.5 shrink-0" />
                    A confirmation packet and virtual exam study materials was successfully mailed to <span className="text-slate-700 font-medium">{parent.email}</span>.
                  </p>
                  <p className="flex items-start gap-1.5">
                    <Icon name="Check" size={14} className="text-brand-secondary mt-0.5 shrink-0" />
                    Registry counselors will contact <span className="text-slate-700 font-medium">{parent.phone}</span> within 24 business hours to lock down details.
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleResetForm}
                    className="flex-1 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-medium rounded-xl transition shadow-lg"
                  >
                    Finish and Back
                  </button>
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      // Custom download receipt mock
                      alert("Receipt prospectus has been exported to local PDF downloads successfully.");
                    }}
                    className="px-4 py-3 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-1.5"
                    title="Export Voucher receipt"
                  >
                    <Icon name="FileText" size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
