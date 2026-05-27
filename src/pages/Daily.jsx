import { useState } from "react";
import PageBackground from "../components/PageBackground";
import LogoHeader from "../components/LogoHeader";
import GlassCard from "../components/GlassCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = [
  {
    title: "Chosen",
    scripture: "\"You did not choose Me, but I chose you and appointed you.\" — John 15:16",
    encouragement: "Before you ever sought God, He had already set His love upon you. You are not an afterthought — you are intentionally chosen by the King of Kings.",
    prayer: "Father, thank You for choosing me. I receive that truth today. Help me walk as one who is chosen, set apart, and deeply valued by You. In Jesus' name, Amen.",
    declaration: "I am chosen by God. I am not rejected, forgotten, or overlooked. The Creator of the universe selected me on purpose and for a purpose.",
    action: "Write down 3 areas of your life where you have felt unchosen or rejected. Speak John 15:16 over each one and release them to God.",
    reflection: "When did you first realize God chose you — not because of your performance, but because of His love?"
  },
  {
    title: "Forgiven",
    scripture: "\"In Him we have redemption through His blood, the forgiveness of sins.\" — Ephesians 1:7",
    encouragement: "Your past does not define you. Every sin, every failure, every mistake has been covered by the blood of Jesus. You are completely forgiven — walk free today.",
    prayer: "Lord, I thank You that I am forgiven. I release all guilt and shame. I receive Your mercy and grace. I am washed clean by Your blood. In Jesus' name, Amen.",
    declaration: "I am forgiven. My sins are removed as far as the east is from the west. I walk in freedom, not condemnation.",
    action: "Is there something you've been carrying guilt over? Write it down, then cross it out and write 'FORGIVEN' over it.",
    reflection: "How does knowing you are fully forgiven change the way you approach God today?"
  },
  {
    title: "Righteous",
    scripture: "\"God made Him who had no sin to be sin for us, so that in Him we might become the righteousness of God.\" — 2 Corinthians 5:21",
    encouragement: "Righteousness is not something you earn — it is a gift given through Christ. You stand before God clothed in His righteousness. Hold your head high.",
    prayer: "Father, I thank You that I am the righteousness of God in Christ. I do not stand on my own merit but on the finished work of the cross. In Jesus' name, Amen.",
    declaration: "I am righteous — not because of what I've done, but because of what Jesus has done. I am right with God.",
    action: "Replace one negative self-statement you often repeat with the truth of 2 Corinthians 5:21.",
    reflection: "What would change in your confidence if you truly believed you are righteous in God's sight?"
  },
  {
    title: "Strong in Christ",
    scripture: "\"I can do all things through Christ who strengthens me.\" — Philippians 4:13",
    encouragement: "Your strength does not come from your ability — it flows from the Spirit of the Living God inside you. You are strong, courageous, and empowered.",
    prayer: "Lord, I receive Your strength today. Where I am weak, You are strong. I will not lean on my own understanding but trust in Your power. In Jesus' name, Amen.",
    declaration: "I am strong in the Lord and in the power of His might. No weapon formed against me shall prosper.",
    action: "Identify one challenge you're facing. Speak Philippians 4:13 over it three times aloud.",
    reflection: "When have you experienced God's strength carrying you through something you couldn't do alone?"
  },
  {
    title: "Accepted",
    scripture: "\"He has made us accepted in the Beloved.\" — Ephesians 1:6",
    encouragement: "You don't need to perform for approval. You are already fully accepted by the Father. Not because of your resume — but because of His Son.",
    prayer: "Father, thank You that I am accepted. I don't have to strive for Your approval — I already have it. I rest in Your love today. In Jesus' name, Amen.",
    declaration: "I am accepted in the Beloved. I am not rejected, not disqualified. I belong to God's family.",
    action: "Think of someone whose approval you've been chasing. Release that to God and say: 'I am already accepted.'",
    reflection: "How would your relationships change if you stopped seeking acceptance from people and rested in God's acceptance?"
  },
  {
    title: "Called",
    scripture: "\"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\" — Ephesians 2:10",
    encouragement: "You are not wandering without purpose. God has a specific calling over your life. Even before you were born, He had plans for you.",
    prayer: "Lord, I thank You that I am called and appointed. Open my eyes to the purpose You have for me. Give me boldness to walk in it. In Jesus' name, Amen.",
    declaration: "I am called by God. I am His handiwork. My life has purpose, direction, and Kingdom significance.",
    action: "Write down one gift or passion God has placed in you. Ask Him how to use it for His Kingdom this week.",
    reflection: "What is one area of your life where you sense God is calling you to step up and step out?"
  },
  {
    title: "Victorious",
    scripture: "\"But thanks be to God, who gives us the victory through our Lord Jesus Christ.\" — 1 Corinthians 15:57",
    encouragement: "You are not fighting for victory — you are fighting from victory. The battle has already been won through Christ. Walk in triumph today.",
    prayer: "Father, I declare that I am victorious through Jesus. I will not be defeated. Every battle I face has already been won at the cross. In Jesus' name, Amen.",
    declaration: "I am more than a conqueror through Him who loved me. I am victorious. I walk in the triumph of the cross.",
    action: "Speak this declaration aloud over every area of your life that feels like a battle today.",
    reflection: "What does it mean to you to fight FROM victory instead of FOR victory?"
  },
];

export default function Daily() {
  const [idx, setIdx] = useState(new Date().getDay());
  const day = DAYS[idx];

  return (
    <div className="min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e63734223_daily-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/87e85150b_daily-mobile.png"
      />
      <LogoHeader title="Today's Identity Word" subtitle="Receive a fresh word of truth for your identity in Christ." />

      <div className="max-w-2xl mx-auto px-4 pb-16">
        {/* Day selector */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setIdx((idx - 1 + 7) % 7)} className="text-yellow-300 hover:text-yellow-100 transition"><ChevronLeft size={28} /></button>
          <div className="flex gap-2">
            {DAYS.map((d, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-8 h-8 rounded-full text-xs font-heading font-bold transition ${i === idx ? "bg-yellow-500 text-black" : "bg-black/30 text-yellow-300 border border-yellow-700/30 hover:bg-yellow-700/30"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={() => setIdx((idx + 1) % 7)} className="text-yellow-300 hover:text-yellow-100 transition"><ChevronRight size={28} /></button>
        </div>

        <GlassCard className="mb-4">
          <h2 className="font-heading text-2xl text-yellow-300 font-bold mb-3 text-center" style={{ textShadow: '0 0 20px rgba(218,165,32,0.4)' }}>
            Day {idx + 1}: {day.title}
          </h2>
          <p className="text-yellow-200/90 italic text-center mb-4 text-sm">{day.scripture}</p>
        </GlassCard>

        {[
          { label: "Encouragement", text: day.encouragement },
          { label: "Prayer", text: day.prayer },
          { label: "Declaration", text: day.declaration },
          { label: "Action Step", text: day.action },
          { label: "Reflection", text: day.reflection },
        ].map((s, i) => (
          <GlassCard key={i} className="mb-3">
            <h3 className="font-heading text-yellow-400 text-sm font-bold mb-1 uppercase tracking-wider">{s.label}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{s.text}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}