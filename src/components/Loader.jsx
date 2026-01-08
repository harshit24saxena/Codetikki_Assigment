export function SkeletonLoader({ count = 6 }) {
  return (
  <>
    <div className="skeleton-header">
      <div className="skeleton-line" />
    </div>
    <div className="grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-title" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  </>
  );
}

 