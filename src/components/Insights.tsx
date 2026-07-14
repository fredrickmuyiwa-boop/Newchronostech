import { ArrowRight, Calendar } from 'lucide-react';
import { ARTICLES } from '../data/content';
import { SectionContainer } from './ui/SectionContainer';
import { SectionHeading } from './SectionHeading';
import { Badge } from './ui/Badge';
import { Reveal } from './Reveal';

export function Insights() {
  return (
    <SectionContainer id="blog" className="bg-white">
      <SectionHeading
        eyebrow="Latest Insights"
        title="Insights from our recruitment experts"
        description="Practical guidance and trends for employers and job seekers navigating the global talent market."
      />

      <div className="mt-16 grid gap-7 md:grid-cols-3">
        {ARTICLES.map((article, i) => (
          <Reveal key={article.title} delay={i * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-100/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <Badge className="absolute left-4 top-4">{article.category}</Badge>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-navy-600">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {article.date}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {article.excerpt}
                </p>

                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-700"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
