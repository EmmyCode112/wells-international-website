import React from 'react';
import {
  Users,
  School,
  Cpu,
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Download,
  CheckCircle2,
  UploadCloud,
  Calendar,
  BookOpen,
  Clock,
  Menu,
  X,
  Search,
  Filter,
  Check,
  FileText,
  Globe,
  GraduationCap,
  FlaskConical,
  Library,
  Bus,
  Gamepad,
  Heart,
  Dribbble,
  BadgePercent,
  Plus,
  Minus,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size }) => {
  const map: Record<string, any> = {
    Users,
    School,
    Cpu,
    ShieldCheck,
    Award,
    HeartHandshake,
    Compass,
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    ChevronLeft,
    Download,
    CheckCircle2,
    UploadCloud,
    Calendar,
    BookOpen,
    Clock,
    Menu,
    X,
    Search,
    Filter,
    Check,
    FileText,
    Globe,
    GraduationCap,
    FlaskConical,
    Library,
    Bus,
    Gamepad,
    Heart,
    Dribbble,
    BadgePercent,
    Plus,
    Minus,
    Facebook,
    Instagram,
    MessageCircle
  };

  const IconComponent = map[name] || School; // Defaults to School if not found
  return <IconComponent className={className} size={size} />;
};

