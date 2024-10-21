type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      aria-hidden
      className={`animate-pulse bg-neutral-400/30 flex min-w-1 min-h-1 ${className}`}
    />
  );
};

Skeleton.displayName = 'Skeleton'
