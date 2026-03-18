export function initProjectHoverBlur(root = document) {

  const projects = root.querySelectorAll(".projects__project");

  const blurClass = "projects__project--blurred";

  const blurOthers = (active) => {
    projects.forEach((project) => {
      if (project !== active) { //busca al que se puso encima y no le pone la clase
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

    project.addEventListener("mouseenter", onEnter);
    project.addEventListener("mouseleave", onLeave);
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {

      entry.target.style.setProperty("--project-blur", `${blurPx}px`);
    }
  });

  projects.forEach((project) => resizeObserver.observe(project));
}
