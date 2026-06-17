import { marqueeItems } from "@/lib/data";

export default function MarqueeBand() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-gold/10 py-6">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-2xl text-ivory/15 sm:text-3xl"
          >
            {item}
            <span className="text-gold/40">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
