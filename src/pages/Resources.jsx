import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const PAYPAL = "https://www.paypal.com/donate/?business=kingdommm.chris@gmail.com";

const RESOURCES = [
  { name: "The Bible Companion", desc: "A guided companion for studying the Word daily.", link: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", desc: "Walk through the foundations of Kingdom living.", link: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak the Word of God boldly over your life.", link: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Receive healing through the promises of God.", link: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover the unique calling God has placed on your life.", link: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", desc: "The home of Kingdom Mandate Ministry.", link: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, declarations, and worship.", link: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", desc: "Support Kingdom work through generous giving.", link: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/804f8eb39_resources-about-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/fd518e894_resources-about-mobile.png"
      />
      <LogoHeader title="Continue the Journey" subtitle="Explore the Kingdom Mandate Ministry ecosystem and grow deeper in faith." />

      <div className="max-w-3xl mx-auto px-4 pb-16 grid sm:grid-cols-2 gap-4">
        {RESOURCES.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard className="h-full hover:border-yellow-500/40 transition">
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-yellow-300 font-bold text-base">{r.name}</h3>
                <ExternalLink size={14} className="text-yellow-500/60 group-hover:text-yellow-400 transition mt-1" />
              </div>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">{r.desc}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </div>
  );
}