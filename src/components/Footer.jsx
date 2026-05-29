const FOOTER_LINKS = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { label: "Fire", href: "https://fire.kingdommandateministry.com" },
  { label: "Pathway", href: "https://pathway.kingdommandateministry.com" },
  { label: "Declarations", href: "https://declarations.kingdommandateministry.com" },
  { label: "Healing Room", href: "https://healing.kingdommandateministry.com" },
  { label: "Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { label: "Identity", href: "https://identity.kingdommandateministry.com" },
  { label: "Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { label: "Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { label: "Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { label: "Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { label: "Family Altar", href: "https://family.kingdommandateministry.com" },
  { label: "Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { label: "Freedom", href: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-yellow-700/30 bg-black/50 backdrop-blur-md px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-5">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-yellow-300/80 hover:text-yellow-200 text-xs font-heading tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-center text-yellow-200/60 text-xs font-body">
          © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
        </p>
      </div>
    </footer>
  );
}