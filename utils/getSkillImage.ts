export const getSkillImage = (skill: string) => {
  switch (skill) {
    case "Python":
      return { src: "/python.svg", alt: "Python" };
    case "React":
      return { src: "/react.svg", alt: "React" };
    case "Go":
      return { src: "/go.svg", alt: "Go" };
    case "JavaScript":
      return { src: "/javascript.svg", alt: "JavaScript" };
    case "TypeScript":
      return { src: "/typescript.svg", alt: "TypeScript" };
    case "PostgreSQL":
      return { src: "/postgresql.svg", alt: "PostgreSQL" };
    case "PyTorch":
      return { src: "/pytorch.svg", alt: "PyTorch" };
    case "Selenium":
      return { src: "/selenium.svg", alt: "Selenium" };
    case "Docker":
      return { src: "/docker.svg", alt: "Docker" };
    case "Next.js":
      return { src: "/nextJS.svg", alt: "Next.js" };
    case "Git":
      return { src: "/git.svg", alt: "Git" };
    case "numpy":
      return { src: "/numpy.svg", alt: "numpy" };
    case "scikit-learn":
      return { src: "/scikit-learn.svg", alt: "scikit-learn" };
    case "vite":
      return { src: "/vitejs.svg", alt: "Vite" };
    case "Java":
      return { src: "/java.svg", alt: "Java" };
    default:
      return { src: "/default-image.png", alt: "Default Image" };
  }
}
