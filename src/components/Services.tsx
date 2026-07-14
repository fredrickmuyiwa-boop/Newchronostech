import { SERVICES } from '../data/content';
import { SectionContainer } from './ui/SectionContainer';
import { SectionHeading } from './SectionHeading';
import { IconCard } from './ui/IconCard';
import { IconCardGrid } from './ui/IconCardGrid';

export function Services() {
  return (
    <SectionContainer id="services" className="bg-slate-50">
      <SectionHeading
        eyebrow="Our Services"
        title="Recruitment solutions that scale"
        description="From sourcing to onboarding, we provide end-to-end talent services designed for ambitious global teams."
      />
      <IconCardGrid columns={4}>
        {SERVICES.map((service) => (
          <IconCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </IconCardGrid>
    </SectionContainer>
  );
}
