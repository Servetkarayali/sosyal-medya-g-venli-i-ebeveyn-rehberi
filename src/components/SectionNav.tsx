"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <p className="eyebrow mb-4">Bu sayfada</p>
      <ul className="space-y-2 border-l border-line">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`block pl-4 py-1 text-sm -ml-px border-l transition-colors ${
                active === it.id
                  ? "border-ink text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
