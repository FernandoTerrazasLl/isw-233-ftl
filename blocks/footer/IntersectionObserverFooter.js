export function observeMainIntersection({ onIntersect, threshold = 0.1, rootMargin = "0px 0px 200px 0px" } = {}) {
  const main = document.querySelector("main");
  if (!main) return null;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        obs.disconnect();
        onIntersect?.();
      }
    },
    {
      root: null,
      threshold,
      rootMargin,
    }
  );

  observer.observe(main);
  return observer;
}
