export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface FeatureItem {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  subjects: string[];
  activities: string[];
  approach: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'academics' | 'sports' | 'events' | 'excursions' | 'graduation';
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: 'parent' | 'student' | 'alumni';
  comment: string;
  image: string;
  relationship: string; // e.g. "Parent of Year 9 Student" or "Class of 2024"
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'News' | 'Event' | 'Announcement';
  date: string;
  image: string;
  author: string;
  readTime: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FacilityItem {
  title: string;
  description: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}
