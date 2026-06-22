"use client";

import { useEffect } from "react";

/**
 * Adds the `visible` class to every `.fade-in-up` / `.step-line` element as it
 * scrolls into view, driving the CSS scroll-reveal animations. Mounted once at
 * the page root so it picks up elements across all sections.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-in-up, .step-line");

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
