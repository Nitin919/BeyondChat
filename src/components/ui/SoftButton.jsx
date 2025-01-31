



import React from "react";
import clsx from "clsx"; // Utility for conditionally joining class names

const SoftButton = React.forwardRef(
  (
    {
      variant = "primary", // 'primary', 'secondary', 'outline', 'danger'
      size = "default",    // 'sm', 'icon', or 'default'
      className,
      children,
      "aria-label": ariaLabel, // Accessibility for icons
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        aria-label={ariaLabel || (typeof children === "string" ? children : "button")}
        className={clsx(
          // Shared styles for all buttons
          "rounded-full transition-all duration-200 flex items-center justify-center font-display shadow-soft",
          "focus:outline-none active:scale-95 hover:shadow-md", 

          // Variant-based styles using your CSS theme (index.css)
          {
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-secondary text-card-foreground hover:bg-secondary/90": variant === "secondary",
            "border border-primary text-primary hover:bg-primary/10": variant === "outline",
            "bg-red-500 text-white hover:bg-red-600": variant === "danger",
          },

          // Size-based styles
          {
            "h-10 px-5 text-base": size === "default",
            "h-8 px-4 text-sm": size === "sm",
            "w-10 h-10 p-2": size === "icon", // For icon-only buttons
          },

          className // Include any additional styles passed in
        )}
      >
        {children}
      </button>
    );
  }
);

SoftButton.displayName = "SoftButton"; // Helpful for React DevTools

export default SoftButton;
