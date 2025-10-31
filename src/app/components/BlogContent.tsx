'use client';

export default function BlogContent({ children }: { children: React.ReactNode }) {
  return <div className="prose">{children}</div>;
}
