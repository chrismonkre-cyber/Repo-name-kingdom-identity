import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import GlassCard from "../components/GlassCard";
import { Flame, Crown, Heart, ArrowRight } from "lucide-react";

const PAYPAL = "https://www.paypal.com/donate/?business=kingdommm.chris@gmail.com";

const features = [
  { icon: Heart, title: "Chosen & Loved", text: "You are not an accident. God chose you before the foundation of the world. You are deeply, eternally loved." },
  { icon: Crown, title: "Righteous in Christ", text: "Through Christ, you have been made righteous — not by works, but by grace. Stand in that truth boldly." },
  { icon: Flame, title: "Called with Purpose", text: "You were created for Kingdom purpose. God has equipped and appointed you for this hour." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/be395651b_home-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/0f41a82ee_home-mobile.png"
      />

      <LogoHeader
        title="Kingdom Identity"
        subtitle="Know who you are in Christ. Walk in truth, authority, and purpose."
      />

      <div className="max-w-3xl mx-auto px-4 pb-16">
        <GlassCard className="mb-8 text-white/90 text-center">
          <p className="leading-relaxed">
            Identity confusion is one of the enemy's greatest weapons — but it is broken by the Word of God.
            When you know who you are in Christ, you walk differently, speak differently, and live with Kingdom authority.
            This app is your daily companion to discover, declare, and live from your true identity in Him.
          </p>
        </GlassCard>

        {/* Main Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {[
            { to: "/daily", label: "Start Today" },
            { to: "/identity", label: "Identity Truths" },
            { to: "/journal", label: "Journal" },
            { href: PAYPAL, label: "Partner / Sow" },
          ].map((btn, i) =>
            btn.href ? (
              <a
                key={i}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-heading text-sm font-semibold tracking-wide bg-gradient-to-r from-yellow-700 to-yellow-500 text-white shadow-lg hover:brightness-110 transition"
              >
                {btn.label} <ArrowRight size={16} />
              </a>
            ) : (
              <Link
                key={i}
                to={btn.to}
                className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-heading text-sm font-semibold tracking-wide bg-gradient-to-r from-yellow-700 to-yellow-500 text-white shadow-lg hover:brightness-110 transition"
              >
                {btn.label} <ArrowRight size={16} />
              </Link>
            )
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <GlassCard key={i} className="text-center">
              <f.icon className="mx-auto mb-3 text-yellow-400" size={32} />
              <h3 className="font-heading text-yellow-300 text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-white/85 text-sm leading-relaxed">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}