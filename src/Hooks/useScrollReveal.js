
import { useEffect, useRef } from "react";

function useScrollReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Make sure the element is visible by default.
    element.classList.add("reveal-ready");

    const reveal = () => {
      element.classList.add("is-visible");
    };

    // If IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();

            if (options.once !== false) {
              observer.unobserve(element);
            }
          }
        },
        {
          threshold: options.threshold ?? 0.12,
          rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
        }
      );

      observer.observe(element);

      // Important:
      // Check elements that are already inside the viewport.
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < viewportHeight && rect.bottom > 0) {
          reveal();

          if (options.once !== false) {
            observer.unobserve(element);
          }
        }
      });

      return () => {
        observer.disconnect();
      };
    }

    // Fallback
    reveal();
  }, [options.once, options.threshold, options.rootMargin]);

  return elementRef;
}

export default useScrollReveal;

