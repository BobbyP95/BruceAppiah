/** Flips between light and dark by setting data-theme on <html>. */
export function useThemeToggle() {
  return () => {
    const root = document.documentElement;
    const chosen = root.getAttribute("data-theme");
    const dark = chosen
      ? chosen === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", dark ? "light" : "dark");
  };
}
