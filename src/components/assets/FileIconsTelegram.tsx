export default function FileIconsTelegram({
  className = "",
}: FileIconsTelegramProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_686)"><path d="M14.7011 1.91942L0.525852 7.41398C-0.0445851 7.66986 -0.237523 8.18226 0.387977 8.46036L4.02454 9.62201L12.8173 4.15983C13.2974 3.81692 13.7889 3.90836 13.3659 4.28558L5.81416 11.1585L5.57695 14.0672C5.79667 14.5163 6.19898 14.5184 6.4556 14.2951L8.54492 12.308L12.1232 15.0013C12.9543 15.4959 13.4065 15.1767 13.5853 14.2703L15.9324 3.09933C16.176 1.98354 15.7605 1.49192 14.7011 1.91942Z" fill="#F2F2F2"/></g><defs><clipPath id="clip0_1_686"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
    </div>
  );
}

interface FileIconsTelegramProps {
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
