import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Projects from "@/components/Projects";
import { cn } from "@/lib/utils";

const ProjectsPage = () => {
  return (
    <div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12"
        )}
      />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
