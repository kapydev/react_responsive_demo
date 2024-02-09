export default function BxArrowBack({ className = "" }: BxArrowBackProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 13L18.086 13L12.793 18.293L14.207 19.707L21.914 12L14.207 4.29303L12.793 5.70703L18.086 11L3.5 11L3.5 13Z" fill="black"/></svg>
    </div>
  );
}

interface BxArrowBackProps {
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
