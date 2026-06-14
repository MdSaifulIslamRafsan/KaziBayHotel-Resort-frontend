import React from 'react';
import {
  MapPin,
  Briefcase,
  Compass,
  Rocket,
  LucideIcon,
} from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const stepsData: Step[] = [
  {
    id: 1,
    title: 'Choose Destination',
    description:
      'Standing at the edge of a towering cliff, gazing at a vast desert under',
    icon: MapPin,
  },
  {
    id: 2,
    title: 'Select Your Package',
    description:
      'listening to the rhythmic waves of the ocean can be deeply humbling',
    icon: Briefcase,
  },
  {
    id: 3,
    title: 'Customize Your Itinerary',
    description:
      'These moments remind us of the planet\'s beauty and the importance',
    icon: Compass,
  },
  {
    id: 4,
    title: 'Book & Get Ready to Go',
    description:
      'Savoring new flavors creates memories that stay with you long after the trip',
    icon: Rocket,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto">
        <SectionHeader
          subtitle="How It Works"
          title="Our Booking Process"
        />
        

        {/* Timeline Container */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0">
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative group flex flex-col items-center text-center"
                >
                  {/* Connecting Line (hidden on mobile, visible on desktop) */}
                  {index < stepsData.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-4 left-5/8 w-[calc(100%-90px)] h-[1px]  bg-border"
                      style={{
                        transform: "translateX(0.5rem)",
                        backgroundImage:
                          "repeating-linear-gradient(90deg, #009C9C 0px, #009C9C 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  )}

                  {/* Step Badge */}
                  <div className="mb-6 inline-flex">
                    <span className="px-4 py-2 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground text-sm font-semibold">
                      STEP {String(step.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="mb-2 rounded-full flex items-center justify-center ">
                    <Icon
                      size={48}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <h3 className="text-xl 2xl:text-2xl font-serif font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;