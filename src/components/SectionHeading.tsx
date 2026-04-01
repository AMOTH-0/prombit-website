interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: SectionHeadingProps) => (
  <div className="mx-auto mb-16 max-w-2xl text-center">
    {badge && (
      <span className="mb-4 inline-block rounded-full border border-glow bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
        {badge}
      </span>
    )}
    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);

export default SectionHeading;
