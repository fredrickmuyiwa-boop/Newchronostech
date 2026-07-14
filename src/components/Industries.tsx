import { INDUSTRIES } from '../data/content';
import { SectionContainer } from './ui/SectionContainer';
import { SectionHeading } from './SectionHeading';
import { IconCard } from './ui/IconCard';
import { IconCardGrid } from './ui/IconCardGrid';

export function Industries() {
  return (
    <SectionContainer id="industries" className="bg-slate-50">
      <SectionHeading
        eyebrow="Industries"
        title="Industries we serve"
        description="Sector-specific expertise means we understand the roles, regulations and skills that matter in your field."
      />
      <IconCardGrid columns={3}>
        {INDUSTRIES.map((industry) => (
          <IconCard
            key={industry.title}
            icon={industry.icon}
            title={industry.title}
            description={industry.description}
            variant="horizontal"
          />
        ))}
      </IconCardGrid>
    </SectionContainer>
  );
}
