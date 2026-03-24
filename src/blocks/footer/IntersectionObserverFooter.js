export function observeMainIntersection({ onIntersect, threshold = 0.9, rootMargin = "0px" } = {}) {
  const main = document.querySelector("main");
  if (!main) return null;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.intersectionRatio >= threshold) {
        obs.disconnect();
        onIntersect?.();
      }
    },
    {
      root: null,
      threshold,
      rootMargin: "0px",
    }
  );

  observer.observe(main);
  return observer;
}
