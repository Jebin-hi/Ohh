export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <span 
      className={`font-bold text-2xl bg-gradient-to-r from-blue-400 via-blue-300 to-slate-200 bg-clip-text text-transparent ${className || ''}`}
      style={{
        fontFamily: '"Caveat", "Kalam", "Comic Sans MS", "Brush Script MT", cursive',
        fontWeight: '700',
        letterSpacing: '0.02em',
        fontStyle: 'normal'
      }}
    >
      Jebs
    </span>
  );
}; 