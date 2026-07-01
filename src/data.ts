import { 
  CoreValue, 
  FacilityItem, 
  FeatureItem, 
  GalleryItem, 
  NewsItem, 
  ProgramItem, 
  StatItem, 
  TeamMember, 
  TestimonialItem 
} from './types';

export const statsData: StatItem[] = [
  { number: 500, suffix: '+', label: 'Students' },
  { number: 45, suffix: '', label: 'Teachers' },
  { number: 15, suffix: ' Years', label: 'Years of Excellence' },
  { number: 98, suffix: '%', label: 'Examination Success Rate' }
];

export const featuresData: FeatureItem[] = [
  {
    icon: 'Users',
    title: 'Certified Teachers',
    description: 'Our faculty comprises internationally certified, highly experienced educators dedicated to personal growth and elite student outcomes.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe Learning Environment',
    description: 'A fortified 24/7 guarded campus featuring perimeter surveillance, biometric visitor checks, and responsive safety networks.'
  },
  {
    icon: 'Cpu',
    title: 'Digital Learning',
    description: 'State-of-the-art interactive digital smartboards, personal student laptop systems, and comprehensive junior programming courses.'
  },
  {
    icon: 'BadgePercent',
    title: 'Affordable Tuition',
    description: 'Premium international education with dual-syllabus rigor, offered through flexible payments and highly considerate pricing tiers.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Moral Excellence',
    description: 'An ethics-driven environment that instills respect, high-moral standards, community volunteerism, and elite character development.'
  },
  {
    icon: 'Award',
    title: 'Excellent WAEC/NECO Results',
    description: 'A stellar record of performance, consistently ranking among the top scoring schools in national and international examinations.'
  },
  {
    icon: 'Compass',
    title: 'Extracurricular Activities',
    description: 'Over 25 active clubs, including robotics engineering, junior coding, professional football training, chess leagues, and music classes.'
  }
];

export const programsData: ProgramItem[] = [
  {
    id: 'nursery',
    title: 'Nursery School',
    ageRange: 'Ages 2 - 5',
    description: 'A magical foundation where play, emotional intelligence, and cognitive development collide. We feed natural curiosities through sensory classrooms.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
    subjects: ['Early Numeracy & Literacy', 'Creative Arts & Music', 'Sensory Play & Speech', 'Motor Skills Development', 'Introduction to French'],
    activities: ['Finger Painting', 'Storytelling & Drama', 'Mini-Gymnastics', 'Gardening & Animal Care', 'Interactive Puppet Shows'],
    approach: 'Montessori-inspired child-centered learning. We prioritize social milestones, curiosity, and coordination in secure, sensory-rich spaces.'
  },
  {
    id: 'primary',
    title: 'Primary School',
    ageRange: 'Ages 5 - 11',
    description: 'Nurturing deep critical thinking, core mathematics, scientific discovery, and bilateral communication. This stage develops rigorous, curious life-long scholars.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
    subjects: ['Advanced Mathematics', 'English Language & Literature', 'General Sciences', 'Social Studies & Civics', 'Information Technology', 'Art & Design'],
    activities: ['Junior Coding Club', 'Inter-House Sports Tournaments', 'Spelling Bees & Debate Hub', 'School Choir & Instrumentalists', 'Chess League'],
    approach: 'Inquiry-based learning style with focus on collaborative project problem-solving, cognitive agility, and standard-setting literacy levels.'
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    ageRange: 'Ages 11 - 18',
    description: 'Preparing global leaders through Cambridge IGCSE courses, local WAEC accreditation, advanced STEM pathways, collegiate preparatory coaching, and robust character forging.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
    subjects: ['Pure Mathematics & Calculus', 'Physics, Chemistry & Biology', 'Computer Science & AI', 'Advanced Economics', 'Global History & Government', 'Modern Languages'],
    activities: ['Model United Nations (MUN)', 'Robotics & Rocket Engineering', 'Basketball & Soccer Varsity', 'Young Entrepreneurs Incubator', 'Creative Writing Workshops'],
    approach: 'Collegiate preparatory system emphasizing intellectual independence, practical lab work, advanced research writing, and global leadership skills.'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600',
    title: 'Advanced Science Lab Experiments',
    category: 'academics',
    description: 'Senior secondary students conducting volumetric titration in our state-of-the-art chemistry lab.'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600',
    title: 'Inter-House Football Championship Cup',
    category: 'sports',
    description: 'Our senior soccer team celebrating a decisive 3-1 victory at the annual sports festival.'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
    title: 'Annual Youth Science & Technology Expo',
    category: 'events',
    description: 'Primary school developers presenting automated smart irrigation systems to parents.'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=600',
    title: 'Field Trip to National Aerospace Museum',
    category: 'excursions',
    description: 'Expanding curriculum boundaries through interactive exposure to aeronautical history.'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600',
    title: 'Valedictory & Graduation Ceremony Class of 2025',
    category: 'graduation',
    description: 'Our top-achieving final-year students celebrate receiving admissions to world-renowned universities.'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
    title: 'Robotics Workshop Competition',
    category: 'academics',
    description: 'Coding automation algorithms using smart controllers for regional competition.'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600',
    title: 'Elite Track and Field Relay Race',
    category: 'sports',
    description: 'Setting record timings in the under-16 athletics tournament.'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    title: 'Symphony Concert and Cultural Night',
    category: 'events',
    description: 'A vibrant showcase of traditional dance, instrumental acoustics, and parental assemblies.'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Helen Archibong',
    role: 'parent',
    comment: 'Wells International has completely transformed my dual-language twins. The school marries academic rigor with emotional stability. The STEM syllabus is second to none, and my children wake up excited for school every morning.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    relationship: 'Parent of Years 4 & 7 Students'
  },
  {
    id: 'test-2',
    name: 'David Nkrumah, Esq.',
    role: 'alumni',
    comment: 'The foundations I received here paved my entry into Imperial College London and Harvard Law School. Teamwork, critical thinking, and the coding classes gave me a 3-year head start over collegiate peers. Truly elite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    relationship: 'Clara/Apex Valedictorian, Class of 2018'
  },
  {
    id: 'test-3',
    name: 'Amanda Kenneth',
    role: 'student',
    comment: 'What I love most is that the teachers don\'t just dictate—they guide and inspire. I was encouraged to launch my own solar-power project in the school incubator, which we now use to operate the science club\'s equipment!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    relationship: 'President of Students Senate, Year 12'
  }
];

export const newsData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Unveiling the Wells International AI and Robotics Research Center',
    excerpt: 'A groundbreaking partnership with leading global engineering hubs brings state-of-the-art sensory controllers and computer vision setups directly into school grounds.',
    content: 'We are thrilled to announce completion of our brand-new AI and Advanced Robotics wing, serving students from Primary Year 5 upwards. Equipped with dedicated 3D printing arrays, microprocessors, and computer-vision toolkits, this center is geared toward preparing Wells International scholars for technological world leadership. The inauguration will feature keynote speaks from leading AI scholars.',
    category: 'News',
    date: 'June 10, 2026',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600',
    author: 'Admin Office',
    readTime: '3 min read'
  },
  {
    id: 'news-2',
    title: 'Admissions Open for Year 2026/2027 Academic Session',
    excerpt: 'Apply today for our world-certified Montessori, Primary, and Secondary colleges. Entrance exam dates and virtual town halls announced.',
    content: 'Prospective families are cordially invited to submit admission dossiers for children across our Early Nursery, Basic Primary, and Secondary Advanced level divisions. Entrance screenings have been divided in batches starting July 5th. Book your campus slot immediately to enjoy guidance panels and early-bird registration offsets.',
    category: 'Announcement',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600',
    author: 'Registrar Dept',
    readTime: '2 min read'
  },
  {
    id: 'news-3',
    title: 'Annual Inter-House Sports Extravaganza Scheduled',
    excerpt: 'Competitors gear up for track, field, swimming, and mental-sports tournaments under high-level adjudication.',
    content: 'The much-awaited annual sports event returns this year with new categories including archery, relay, and digital chess. Parent-teacher relays will conclude the ceremony as we celebrate physical fitness, team synergy, and competitive discipline inside our ultra-modern sports stadium.',
    category: 'Event',
    date: 'June 25, 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    author: 'Aeron Athletics Dept',
    readTime: '4 min read'
  }
];

export const valuesData: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'Setting an absolute baseline of moral honesty, academic honor, and truthfulness in every interpersonal exchange.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'We welcome adaptive pedagogical frameworks, custom student-led projects, and tech-driven classrooms.',
    icon: 'Cpu'
  },
  {
    title: 'Inclusivity',
    description: 'Embracing rich diversity, fostering collaborative student communities, and building cross-cultural empathy.',
    icon: 'Compass'
  },
  {
    title: 'Excellence',
    description: 'Continuously refining academic scores, personal discipline, athletic thresholds, and ethical behaviors.',
    icon: 'Award'
  }
];

export const facilitiesData: FacilityItem[] = [
  {
    title: 'Modern Classrooms',
    description: 'Ergonomic, temperature-controlled classrooms equipped with smart interactive display systems, optimal lighting, and adaptive seating configurations.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Science Laboratory',
    description: 'Cutting-edge volumetric, microscopic, and chemical analytical stations enabling deep hands-on physics, biology, and chemistry research.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'ICT Laboratory',
    description: 'An advanced computational playground with secure personal computers, active 3D printing equipment, and high-speed local developer nodes.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Library',
    description: 'Our multi-format scholastic hub featuring over 25,000 reference materials, isolated quiet study rooms, and modern online catalogs.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'School Bus',
    description: 'A fleet of secure, dual air-conditioned passenger coaches equipped with smart GPS transponders and professionally trained drivers.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Playground',
    description: 'A secure, colorful recreational outdoor wonderland built with modern sensory active-play structures, cushioned turf, and fun slides.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Sick Bay',
    description: 'A fully stocked pediatric healthcare unit staffed with a licensed registered nurse to support continuous student physical well-being.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Sports Facilities',
    description: 'An international standard arena featuring multi-sport courts, swimming facilities, synthetic relay tracks, and gymnastic setups.',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=600'
  }
];

export const managementTeam: TeamMember[] = [
  {
    name: 'Prof. Dr. Evelyn Brooks, PhD',
    role: 'Principal & Executive Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'An alumnus of Columbia University with over 24 years in international educational management. Evelyn leads our pedagogical innovations and academic boards.'
  },
  {
    name: 'Dr. Marcus Alabi, PhD',
    role: 'Vice Principal (Academics)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    bio: 'Dedicated to curriculum design and standardization. Dr. Marcus aligns our nursery, primary, and secondary programs with world matriculation standards.'
  },
  {
    name: 'Audrey Sinclair, MEd',
    role: 'Dean of Student Affairs & Counselling',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    bio: 'Spearheading mental wellbeing, leadership assemblies, and career advisory, Audrey guarantees that every child values their individual brilliance.'
  }
];
