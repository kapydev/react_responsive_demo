export default function CarbonLocationFilled({
  className = "",
}: CarbonLocationFilledProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 1.5C6.54184 1.50172 5.1439 2.08174 4.11282 3.11281C3.08174 4.14389 2.50173 5.54184 2.50001 7C2.49826 8.19161 2.8875 9.35089 3.60801 10.3C3.60801 10.3 3.75801 10.4975 3.78251 10.526L8.00001 15.5L12.2195 10.5235C12.2415 10.497 12.392 10.3 12.392 10.3L12.3925 10.2985C13.1127 9.34981 13.5017 8.19107 13.5 7C13.4983 5.54184 12.9183 4.14389 11.8872 3.11281C10.8561 2.08174 9.45817 1.50172 8.00001 1.5ZM8.00001 9C7.60444 9 7.21776 8.8827 6.88887 8.66294C6.55997 8.44318 6.30362 8.13082 6.15225 7.76537C6.00087 7.39991 5.96126 6.99778 6.03844 6.60982C6.11561 6.22186 6.30609 5.86549 6.58579 5.58579C6.8655 5.30608 7.22186 5.1156 7.60983 5.03843C7.99779 4.96126 8.39992 5.00087 8.76537 5.15224C9.13082 5.30362 9.44318 5.55996 9.66294 5.88886C9.88271 6.21776 10 6.60444 10 7C9.99934 7.53023 9.78842 8.03855 9.41349 8.41348C9.03856 8.78841 8.53024 8.99934 8.00001 9Z" fill="#F2F2F2"/></svg>
    </div>
  );
}

interface CarbonLocationFilledProps {
  className?: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
