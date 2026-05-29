import { useRef } from "react";
import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { name: "Kingdom Mandate Ministry", desc: "The home and heart of Kingdom Mandate Ministry.", link: "https://kingdommandateministry.com" },
  { name: "The Bible Companion", desc: "A guided companion for studying the Word daily.", link: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", desc: "Bring your requests before God with the community.", link: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", desc: "Stay ignited with Holy Spirit fire daily.", link: "https://fire.kingdommandateministry.com" },
  { name: "Kingdom Pathway", desc: "Walk through the foundations of Kingdom living.", link: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak the Word of God boldly over your life.", link: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Receive healing through the promises of God.", link: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover the unique calling God has placed on your life.", link: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", desc: "Discover and declare who you truly are in Christ.", link: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", desc: "Uncover and activate your spiritual gifts.", link: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", desc: "Stand firm with a Spirit-led spiritual battle strategy.", link: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", desc: "Access the deep wells of God's grace and mercy.", link: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", desc: "Ignite personal and corporate revival in your life.", link: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", desc: "Build a strong family foundation on God's Word.", link: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", desc: "Carry Kingdom culture into your workplace and sphere.", link: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Freedom", desc: "Walk into lasting freedom through the power of Christ.", link: "https://freedom.kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, declarations, and worship.", link: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Contact Us", desc: "Reach out to Kingdom Mandate Ministry directly.", link: "mailto:kingdommm.chris@gmail.com" },
  { name: "Partner / Sow", desc: "Support Kingdom work through generous giving. Every seed matters.", link: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/804f8eb39_resources-about-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/fd518e894_resources-about-mobile.png"
      />
      <LogoHeader title="The Kingdom Ecosystem" subtitle="Explore the full Kingdom Mandate Ministry suite — tools built for the Glory of God." />

      {/* Install Section */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="rounded-2xl backdrop-blur-md bg-black/40 border border-yellow-500/40 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📱</span>
            <h3 className="font-heading text-yellow-300 font-bold text-lg">Install This Free Kingdom App</h3>
          </div>
          <p className="text-yellow-100/90 text-sm leading-relaxed mb-4">
            You can install Kingdom Identity on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="space-y-2 mb-4">
            {[
              "Open this app in your browser (Chrome, Safari, or Edge).",
              "Tap your browser menu — the three dots (⋮) or share icon (□↑).",
              'Choose "Add to Home Screen" or "Install App."',
              "Open it anytime from your home screen like a normal app.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600/40 border border-yellow-500/40 flex items-center justify-center text-yellow-300 text-xs font-heading font-bold">
                  {i + 1}
                </span>
                <span className="text-yellow-100/90 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-yellow-200/55 text-xs italic">No app store needed. Works on iOS, Android, and desktop browsers.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {RESOURCES.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target={r.link.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group block rounded-2xl backdrop-blur-md bg-black/35 border border-yellow-600/30 shadow-lg hover:border-yellow-400/60 hover:bg-black/45 transition p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-yellow-300 font-bold text-sm leading-snug">{r.name}</h3>
              <ExternalLink size={13} className="text-yellow-400/70 group-hover:text-yellow-300 transition mt-0.5 flex-shrink-0" />
            </div>
            <p className="text-yellow-100/80 text-xs mt-2 leading-relaxed">{r.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}