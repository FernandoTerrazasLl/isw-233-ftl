type RootNode = Document | ShadowRoot;

export function initProjectHoverBlur(root: RootNode = document): () => void {
  const projects = root.querySelectorAll<HTMLElement>(".projects__project");

  if (!projects.length) {
    return () => {
    };
  }

  const blurClass = "projects__project--blurred";
  const listeners: Array<{ project: HTMLElement; onEnter: () => void; onLeave: () => void }> = [];

  const blurOthers = (active: HTMLElement) => {
    projects.forEach((project) => {
      if (project !== active) {
        project.classList.add(blurClass);
      }
    });
  };

  const clearBlur = () => {
    projects.forEach((project) => project.classList.remove(blurClass));
  };

  projects.forEach((project) => {
    const onEnter = () => blurOthers(project);
    const onLeave = clearBlur;

    listeners.push({ project, onEnter, onLeave });
    project.addEventListener("mouseenter", onEnter);
    project.addEventListener("mouseleave", onLeave);
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const target = entry.target as HTMLElement;

      // Keep css custom properties in sync with card width for responsive blur tuning.
      target.style.setProperty("--project-blur", entry.contentRect.width < 320 ? "2px" : "4px");
      target.style.setProperty("--project-blur-opacity", entry.contentRect.width < 320 ? "0.4" : "0.65");
    }
  });

  projects.forEach((project) => resizeObserver.observe(project));

  return () => {
    listeners.forEach(({ project, onEnter, onLeave }) => {
      project.removeEventListener("mouseenter", onEnter);
      project.removeEventListener("mouseleave", onLeave);
      project.classList.remove(blurClass);
    });

    resizeObserver.disconnect();
  };
}
