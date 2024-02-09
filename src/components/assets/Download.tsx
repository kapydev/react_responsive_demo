export default function Download({ className = "" }: DownloadProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.425 35.525H33.575V33.075H16.425V35.525ZM33.575 22.05H28.675V14.7H21.325V22.05H16.425L25 30.625L33.575 22.05Z" fill="#F2F2F2"/></svg>
    </div>
  );
}

interface DownloadProps {
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
