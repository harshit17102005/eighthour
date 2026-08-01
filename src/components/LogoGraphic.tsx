export default function LogoGraphic({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center Circle */}
      <circle cx="60" cy="20" r="7.5" stroke="currentColor" strokeWidth="1" />
      
      {/* Top Details */}
      <line x1="60" y1="12" x2="60" y2="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="7" r="1.5" fill="currentColor" />
      <circle cx="60" cy="2.5" r="1.5" fill="currentColor" />

      {/* Bottom Details */}
      <line x1="60" y1="28" x2="60" y2="33" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="33" r="1.5" fill="currentColor" />
      <circle cx="60" cy="37.5" r="1.5" fill="currentColor" />

      {/* Right Details */}
      <line x1="68" y1="20" x2="78" y2="20" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="82" cy="20" rx="3.5" ry="6" fill="currentColor" />
      <line x1="86" y1="20" x2="94" y2="20" stroke="currentColor" strokeWidth="1" />
      {/* Right Crescent */}
      <path d="M 98 15 Q 94 20 98 25" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="98" y1="20" x2="103" y2="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="106" cy="20" r="1.5" fill="currentColor" />

      {/* Left Details */}
      <line x1="52" y1="20" x2="42" y2="20" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="38" cy="20" rx="3.5" ry="6" fill="currentColor" />
      <line x1="34" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="1" />
      {/* Left Crescent */}
      <path d="M 22 15 Q 26 20 22 25" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="22" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
