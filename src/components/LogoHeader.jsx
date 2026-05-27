const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/3a8033775_newlogo.png";

export default function LogoHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center pt-8 pb-4 px-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-20 w-20 md:h-28 md:w-28 rounded-full object-cover mb-4 shadow-lg shadow-yellow-600/30" />
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg" style={{ textShadow: '0 0 30px rgba(218,165,32,0.5)' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-xl text-white/90 text-base md:text-lg font-body leading-relaxed drop-shadow">
          {subtitle}
        </p>
      )}
    </div>
  );
}