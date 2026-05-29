export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-2xl backdrop-blur-md bg-black/35 border border-yellow-600/35 shadow-lg shadow-yellow-900/20 p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
}