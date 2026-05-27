import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import GlassCard from "../components/GlassCard";
import { Save, Trash2, ChevronDown } from "lucide-react";

const STORAGE_KEY = "kingdom-identity-journal";

function loadEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [note, setNote] = useState("");
  const [prayer, setPrayer] = useState("");
  const [declaration, setDeclaration] = useState("");
  const [showPast, setShowPast] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const save = () => {
    if (!note.trim() && !prayer.trim() && !declaration.trim()) return;
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      note: note.trim(),
      prayer: prayer.trim(),
      declaration: declaration.trim(),
    };
    setEntries([entry, ...entries]);
    setNote(""); setPrayer(""); setDeclaration("");
  };

  const remove = (id) => setEntries(entries.filter((e) => e.id !== id));

  const inputClass = "w-full bg-black/20 border border-yellow-700/30 rounded-xl p-3 text-white/90 placeholder-white/40 text-sm focus:outline-none focus:border-yellow-500 resize-none";

  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1e58f788d_journal-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/0b20e9b72_journal-mobile.png"
      />
      <LogoHeader title="Identity Journal" subtitle="Write, pray, declare, and reflect on who you are in Christ." />

      <div className="max-w-2xl mx-auto px-4 pb-16">
        <GlassCard className="mb-6">
          <label className="font-heading text-yellow-400 text-xs uppercase tracking-wider font-bold">Journal Notes</label>
          <textarea rows={3} className={`${inputClass} mt-1 mb-3`} placeholder="What is God speaking to your heart today?" value={note} onChange={(e) => setNote(e.target.value)} />

          <label className="font-heading text-yellow-400 text-xs uppercase tracking-wider font-bold">Prayer Points</label>
          <textarea rows={2} className={`${inputClass} mt-1 mb-3`} placeholder="Write your prayers here..." value={prayer} onChange={(e) => setPrayer(e.target.value)} />

          <label className="font-heading text-yellow-400 text-xs uppercase tracking-wider font-bold">Declarations</label>
          <textarea rows={2} className={`${inputClass} mt-1 mb-4`} placeholder="Declare the truth over your life..." value={declaration} onChange={(e) => setDeclaration(e.target.value)} />

          <button
            onClick={save}
            className="flex items-center gap-2 mx-auto px-6 py-2.5 rounded-xl font-heading text-sm font-bold bg-gradient-to-r from-yellow-700 to-yellow-500 text-white shadow-lg hover:brightness-110 transition"
          >
            <Save size={16} /> Save Entry
          </button>
        </GlassCard>

        {entries.length > 0 && (
          <>
            <button
              onClick={() => setShowPast(!showPast)}
              className="flex items-center gap-2 mx-auto mb-4 text-yellow-300 font-heading text-sm"
            >
              Previous Entries ({entries.length}) <ChevronDown size={16} className={`transition-transform ${showPast ? "rotate-180" : ""}`} />
            </button>

            {showPast && entries.map((e) => (
              <GlassCard key={e.id} className="mb-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-yellow-400/80 text-xs font-heading">{e.date}</span>
                  <button onClick={() => remove(e.id)} className="text-red-400/60 hover:text-red-400 transition"><Trash2 size={14} /></button>
                </div>
                {e.note && <p className="text-white/85 text-sm mb-1"><span className="text-yellow-400 font-bold">Notes:</span> {e.note}</p>}
                {e.prayer && <p className="text-white/85 text-sm mb-1"><span className="text-yellow-400 font-bold">Prayer:</span> {e.prayer}</p>}
                {e.declaration && <p className="text-white/85 text-sm"><span className="text-yellow-400 font-bold">Declaration:</span> {e.declaration}</p>}
              </GlassCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
}