export default function AccountCircle({ className = "" }: AccountCircleProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_870)"><path d="M19 3.16667C10.26 3.16667 3.16663 10.26 3.16663 19C3.16663 27.74 10.26 34.8333 19 34.8333C27.74 34.8333 34.8333 27.74 34.8333 19C34.8333 10.26 27.74 3.16667 19 3.16667ZM19 7.91667C21.6283 7.91667 23.75 10.0383 23.75 12.6667C23.75 15.295 21.6283 17.4167 19 17.4167C16.3716 17.4167 14.25 15.295 14.25 12.6667C14.25 10.0383 16.3716 7.91667 19 7.91667ZM19 30.4C15.0416 30.4 11.5425 28.3733 9.49996 25.3017C9.54746 22.1508 15.8333 20.425 19 20.425C22.1508 20.425 28.4525 22.1508 28.5 25.3017C26.4575 28.3733 22.9583 30.4 19 30.4Z" fill="#9CA3AF"/></g><defs><clipPath id="clip0_1_870"><rect width="38" height="38" fill="white"/></clipPath></defs></svg>
    </div>
  );
}

interface AccountCircleProps {
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
