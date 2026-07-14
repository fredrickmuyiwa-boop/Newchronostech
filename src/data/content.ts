import {
  Globe,
  Search,
  Users,
  Lightbulb,
  Network,
  ClipboardCheck,
  Zap,
  Headset,
  Cpu,
  HardHat,
  HeartPulse,
  Wrench,
  LineChart,
  Building2,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

export interface Article {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: IconCardItem[] = [
  {
    icon: Globe,
    title: 'International Recruitment',
    description:
      'Helping organizations source qualified professionals from around the world while ensuring a smooth hiring process.',
  },
  {
    icon: Search,
    title: 'Executive Search',
    description:
      'Finding experienced leaders and specialists for strategic business roles.',
  },
  {
    icon: Users,
    title: 'Talent Acquisition',
    description:
      'Delivering high-quality candidates that match technical skills, experience, and company culture.',
  },
  {
    icon: Lightbulb,
    title: 'Recruitment Consulting',
    description:
      'Helping organizations develop effective recruitment strategies and workforce planning.',
  },
];

export const FEATURES: IconCardItem[] = [
  {
    icon: Network,
    title: 'Global Talent Network',
    description:
      'Access qualified professionals from an expanding international talent pool.',
  },
  {
    icon: ClipboardCheck,
    title: 'Thorough Candidate Screening',
    description: 'Every candidate is carefully assessed before recommendation.',
  },
  {
    icon: Zap,
    title: 'Fast Hiring Process',
    description: 'Reduce hiring time through efficient recruitment workflows.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description:
      'Our recruitment specialists guide employers and candidates throughout the hiring journey.',
  },
];

export const INDUSTRIES: IconCardItem[] = [
  {
    icon: Cpu,
    title: 'Technology',
    description:
      'Software, data, cloud and product talent for fast-moving tech teams.',
  },
  {
    icon: HardHat,
    title: 'Construction',
    description:
      'Skilled trades, site management and engineering for major projects.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Qualified medical, nursing and allied health professionals.',
  },
  {
    icon: Wrench,
    title: 'Engineering',
    description:
      'Mechanical, electrical and civil engineers across disciplines.',
  },
  {
    icon: LineChart,
    title: 'Finance',
    description:
      'Accounting, analysis and compliance professionals you can trust.',
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description:
      'HR, operations and administration roles that keep businesses running.',
  },
];

export const STATS: StatItem[] = [
  { target: 10000, suffix: '+', label: 'Candidates' },
  { target: 500, suffix: '+', label: 'Employers' },
  { target: 25, suffix: '+', label: 'Countries' },
  { target: 98, suffix: '%', label: 'Placement Satisfaction' },
];

export const ARTICLES: Article[] = [
  {
    category: 'Career Advice',
    title: 'How to Get Hired by International Companies in 2026',
    excerpt:
      'Learn practical strategies for securing international career opportunities.',
    date: 'Jan 12, 2026',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    category: 'Hiring Tips',
    title: '5 Hiring Mistakes Companies Should Avoid',
    excerpt: 'Discover recruitment mistakes that increase hiring costs.',
    date: 'Jan 5, 2026',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    category: 'Industry Trends',
    title: 'The Future of Global Recruitment',
    excerpt:
      'Explore how AI, remote work and global hiring continue to transform recruitment.',
    date: 'Dec 28, 2025',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Company', links: ['About', 'Services', 'Blog', 'Careers'] },
  {
    title: 'Resources',
    links: ['FAQs', 'Privacy Policy', 'Terms & Conditions'],
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mailsolutions@chronostech.space',
    href: 'mailto:mailsolutions@chronostech.space',
  },
  {
    
    icon: Phone,
    label: 'Phone',
    value: '+447443743382',
    href: 'tel:+447443743382',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
];
