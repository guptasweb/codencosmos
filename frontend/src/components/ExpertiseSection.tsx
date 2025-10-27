import React, { memo, useMemo } from 'react';
import { EXPERTISE_DATA } from '../constants';
import Card from './ui/Card';
import Tag from './ui/Tag';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const ExpertiseCard = memo(({ item }: { item: typeof EXPERTISE_DATA[0] }) => (
  <Card
    icon={item.icon}
    title={item.title}
    subtitle={item.description}
    className="card-hover"
  >
    <div className="flex flex-wrap justify-center gap-2">
      {item.tags.map((tag) => (
        <Tag key={tag} variant="default" size="sm">
          {tag}
        </Tag>
      ))}
    </div>
  </Card>
));

ExpertiseCard.displayName = 'ExpertiseCard';

const ExpertiseSection: React.FC = memo(() => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const headerClasses = useMemo(() => cn(
    'text-center mb-16 transition-all duration-1000 ease-out',
    isIntersecting
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'
  ), [isIntersecting]);

  const gridClasses = useMemo(() => cn(
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200',
    isIntersecting
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'
  ), [isIntersecting]);

  return (
    <section ref={elementRef} className="section-padding bg-background-light" id="expertise">
      <div className="container-custom">
        <div className={headerClasses}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expertise & Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique blend of technical expertise and holistic wellness practices
          </p>
        </div>

        <div className={gridClasses}>
          {EXPERTISE_DATA.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
});

ExpertiseSection.displayName = 'ExpertiseSection';

export default ExpertiseSection;
