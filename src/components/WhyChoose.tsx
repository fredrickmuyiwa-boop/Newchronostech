import { FEATURES } from '../data/content';
import { SectionContainer } from './ui/SectionContainer';
import { SectionHeading } from './SectionHeading';
import { IconCard } from './ui/IconCard';
import { IconCardGrid } from './ui/IconCardGrid';

export function WhyChoose() {
  return (
    <SectionContainer className="overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary-50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />

      <SectionHeading
        eyebrow="Why ChronosTech"
        title="Why choose ChronosTech"
        description="We combine global reach with a personal, rigorous approach to every placement."
      />
      <IconCardGrid columns={4}>
        {FEATURES.map((feature) => (
          <IconCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant="glass"
          />
        ))}
      </IconCardGrid>
    </SectionContainer>
  );
}
