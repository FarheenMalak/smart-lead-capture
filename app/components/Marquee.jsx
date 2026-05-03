"use client";

export const Marquee = () => {
  const items = [
    "Instant lead capture",
    "✱",
    "AI-powered scoring",
    "✱",
    "Auto email replies",
    "✱",
    "Real-time sync",
    "✱",
    "Smart notifications",
    "✱",
    "No manual work",
    "✱",
  ];

  return (
    <div className="border-y-2 border-[#0a1f1a] bg-[#f8f1e1] overflow-hidden py-5">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex items-center gap-10 px-5 shrink-0">
            {items.map((item, i) => (
              <span
                key={`${k}-${i}`}
                className="text-3xl md:text-5xl text-[#0a1f1a] font-serif"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};