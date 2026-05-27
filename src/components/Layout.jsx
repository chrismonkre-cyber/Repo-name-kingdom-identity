import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/3a8033775_newlogo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/identity", label: "Identity" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen font-body">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-yellow-700/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading text-yellow-300 text-sm font-bold hidden sm:block drop-shadow">Kingdom Identity</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-heading text-sm tracking-wide transition-colors ${
                  pathname === l.to ? "text-yellow-300" : "text-white/80 hover:text-yellow-300"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-300 p-1">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-yellow-700/30 pb-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 font-heading text-sm tracking-wide ${
                  pathname === l.to ? "text-yellow-300" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-14">
        <Outlet />
      </main>
    </div>
  );
}