function base(children) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {children}
    </svg>
  );
}

export function SparkIcon() {
  return base(
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
  );
}

export function LayersIcon() {
  return base(
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  );
}

export function CodeIcon() {
  return base(
    <>
      <path d="M9 8l-4 4 4 4" />
      <path d="M15 8l4 4-4 4" />
    </>
  );
}

export function RocketIcon() {
  return base(
    <>
      <path d="M14 4c3 1 5 3 6 6-3 1-5 3-6 6l-4-4c1-3 3-5 6-6z" />
      <circle cx="15" cy="9" r="1" />
      <path d="M9 15l-4 4M5 19l-1 2 2-1M7 17l2-2" />
    </>
  );
}

export function CompassIcon() {
  return base(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-2 5-3 1.5 2-5 3-1.5z" />
    </>
  );
}

export function StackIcon() {
  return base(
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  );
}
