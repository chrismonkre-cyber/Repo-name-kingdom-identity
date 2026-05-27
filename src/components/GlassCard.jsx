export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-2xl backdrop-blur-md bg-black/30 border border-yellow-700/20 shadow-lg shadow-yellow-900/10 p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
}