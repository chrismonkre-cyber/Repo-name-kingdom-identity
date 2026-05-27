import { useState } from "react";
import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  {
    title: "Chosen by God",
    scriptures: "Ephesians 1:4 • 1 Peter 2:9 • John 15:16",
    teaching: "Before the world was formed, God set His love upon you and chose you. This was not based on your performance or merit. You are chosen — handpicked by the Creator for relationship and purpose.",
    declaration: "I am chosen by God. I am not random, accidental, or overlooked. The King of Kings has called my name."
  },
  {
    title: "Loved & Accepted",
    scriptures: "Romans 8:38-39 • Ephesians 1:6 • 1 John 3:1",
    teaching: "Nothing can separate you from the love of God. His acceptance of you is not conditional. You are loved as a child — fully, freely, and forever.",
    declaration: "I am loved unconditionally. I am accepted in the Beloved. I do not need to earn what Christ has already given me."
  },
  {
    title: "Forgiven & Free",
    scriptures: "Ephesians 1:7 • Colossians 1:13-14 • Romans 8:1",
    teaching: "Through the blood of Jesus, every sin has been forgiven. There is no condemnation for those who are in Christ. You are free — walk in that freedom today.",
    declaration: "I am forgiven. My past is covered by the blood of Jesus. I walk in freedom and live without condemnation."
  },
  {
    title: "Righteous in Christ",
    scriptures: "2 Corinthians 5:21 • Romans 5:17 • Philippians 3:9",
    teaching: "Righteousness is not earned — it is received. When God looks at you, He sees the righteousness of His Son. You are right with God because of Jesus.",
    declaration: "I am the righteousness of God in Christ Jesus. I stand before God justified, clean, and restored."
  },
  {
    title: "Called & Appointed",
    scriptures: "Ephesians 2:10 • Jeremiah 1:5 • 2 Timothy 1:9",
    teaching: "God has a unique calling over your life. You are not just saved from something — you are saved for something. Walk boldly in the purpose He has set before you.",
    declaration: "I am called and appointed by God. My life carries Kingdom purpose and divine assignment."
  },
  {
    title: "Strong & Courageous",
    scriptures: "Joshua 1:9 • Philippians 4:13 • Isaiah 41:10",
    teaching: "Your strength comes from the Lord. He is with you wherever you go. You do not face your battles alone — the God of angel armies fights for you.",
    declaration: "I am strong and courageous. I do not fear, for the Lord my God is with me. His power works mightily in me."
  },
  {
    title: "Renewed in Mind",
    scriptures: "Romans 12:2 • 2 Corinthians 10:5 • Philippians 4:8",
    teaching: "Your mind is being renewed by the Word of God. You are not a slave to old patterns, lies, or negative thinking. Take every thought captive and align it with truth.",
    declaration: "My mind is being renewed daily. I take every thought captive to the obedience of Christ. I think on what is true, noble, and pure."
  },
  {
    title: "Victorious in Spiritual Battle",
    scriptures: "1 Corinthians 15:57 • Romans 8:37 • Ephesians 6:10-11",
    teaching: "You are more than a conqueror through Christ. The enemy has already been defeated at the cross. Stand firm, put on the armor of God, and walk in the victory that is already yours.",
    declaration: "I am victorious through Jesus Christ. No weapon formed against me shall prosper. I am more than a conqueror."
  },
];

export default function Identity() {
  const [openSet, setOpenSet] = useState(new Set());

  const toggle = (i) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="min-h-screen relative">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/ec5d42a93_identity-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/30fc4ed62_identity-mobile.png"
      />

      <LogoHeader title="Identity Truths" subtitle="Discover who you are in Christ through the Word of God." />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-16 space-y-3">
        {CATEGORIES.map((cat, i) => {
          const isOpen = openSet.has(i);
          return (
            <div
              key={i}
              className="rounded-2xl backdrop-blur-md bg-black/40 border border-yellow-700/30 shadow-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                style={{ cursor: "pointer" }}
              >
                <span className="font-heading text-yellow-300 font-bold text-lg leading-tight">{cat.title}</span>
                <ChevronDown
                  size={20}
                  className="text-yellow-400 flex-shrink-0 ml-3 transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-3 border-t border-yellow-700/20 pt-3">
                  <div>
                    <span className="font-heading text-yellow-400 text-xs uppercase tracking-wider font-bold">Key Scriptures</span>
                    <p className="text-yellow-200/90 text-sm italic mt-1">{cat.scriptures}</p>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{cat.teaching}</p>
                  <div className="bg-yellow-600/15 border border-yellow-500/25 rounded-xl p-3">
                    <span className="font-heading text-yellow-400 text-xs uppercase tracking-wider font-bold">Declaration</span>
                    <p className="text-yellow-100 text-sm font-semibold mt-1">{cat.declaration}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}