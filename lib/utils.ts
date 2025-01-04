import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  // Remove the '#' if it exists
  const id = sectionId.replace("#", "");

  // If we're not on the homepage, first navigate there
  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  // If we're already on the homepage, just scroll to the section
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
