import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import GlassCard from "../components/GlassCard";

const PAYPAL = "https://www.paypal.com/donate/?business=kingdommm.chris@gmail.com";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/804f8eb39_resources-about-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/fd518e894_resources-about-mobile.png"
      />
      <LogoHeader title="About Kingdom Identity" subtitle="Helping believers discover and live from their true identity in Christ." />

      <div className="max-w-2xl mx-auto px-4 pb-16 space-y-4">
        <GlassCard>
          <h3 className="font-heading text-yellow-300 font-bold text-lg mb-3">Our Mission</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            Kingdom Identity exists to help every believer discover and walk in their God-given identity. Through Scripture, prayer, declarations, and daily reflection, this app equips you to break free from identity confusion and step into the fullness of who God says you are.
          </p>
          <p className="text-white/90 text-sm leading-relaxed">
            The enemy's greatest weapon is getting you to forget who you are. But when the Word of God becomes your mirror, you begin to see yourself through Heaven's eyes — chosen, loved, righteous, called, strong, and victorious.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="font-heading text-yellow-300 font-bold text-lg mb-3">Kingdom Mandate Ministry</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            Kingdom Mandate Ministry is dedicated to equipping believers to walk in the fullness of their Kingdom authority. Through teaching, prayer, worship, and practical discipleship tools, we are raising a generation that knows who they are in Christ and walks boldly in the Spirit.
          </p>
          <p className="text-white/90 text-sm leading-relaxed">
            Whether through daily devotionals, identity declarations, healing resources, or purpose-finding tools — every resource we build points back to the Word of God and the power of the Holy Spirit.
          </p>
        </GlassCard>

        <GlassCard className="text-center">
          <h3 className="font-heading text-yellow-300 font-bold text-lg mb-3">Continue Growing</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Your identity journey doesn't stop here. Keep pressing into the Word. Keep declaring truth. Keep journaling what God reveals to you. And remember — you are who God says you are.
          </p>
          <a
            href={PAYPAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-700 to-yellow-500 text-white shadow-lg hover:brightness-110 transition"
          >
            Partner / Sow
          </a>
        </GlassCard>
      </div>
    </div>
  );
}